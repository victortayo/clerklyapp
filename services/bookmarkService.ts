
import {
    doc,
    onSnapshot,
    setDoc,
    deleteDoc,
    collection,
    query,
    where,
    getDocs,
    increment,
    updateDoc,
    runTransaction,
    getDoc,
    writeBatch
} from 'firebase/firestore';
import { db } from '../firebase';
import { CLERKING_TEMPLATES } from '../data';

export interface TemplateStats {
    id: string;
    count: number;
}

export const toggleBookmark = async (userId: string, templateId: string, isBookmarked: boolean) => {
    console.log(`[BookmarkService] Toggling bookmark for user ${userId}, template ${templateId}. Currently bookmarked: ${isBookmarked}`);
    const bookmarkRef = doc(db, 'users', userId, 'bookmarks', templateId);
    const statsRef = doc(db, 'stats', templateId);

    const batch = writeBatch(db);

    try {
        if (isBookmarked) {
            // Remove bookmark
            batch.delete(bookmarkRef);
            batch.update(statsRef, { count: increment(-1) });
        } else {
            // Add bookmark
            batch.set(bookmarkRef, { bookmarkedAt: new Date().toISOString() });
            batch.set(statsRef, { count: increment(1) }, { merge: true });
        }

        await batch.commit();
    } catch (error) {
        console.error("Error toggling bookmark:", error);
        throw error;
    }
};


export const subscribeToStats = (callback: (stats: Record<string, number>) => void) => {
    return onSnapshot(collection(db, 'stats'), (snapshot) => {
        const stats: Record<string, number> = {};

        // Initialize with default values for all templates
        CLERKING_TEMPLATES.forEach(t => {
            stats[t.id] = 0;
        });

        snapshot.forEach((doc) => {
            stats[doc.id] = doc.data().count || 0;
        });
        // console.log("[BookmarkService] Stats updated:", stats); // Optional: verbose logging
        callback(stats);
    });
};

export const initializeStats = async () => {
    console.log("[BookmarkService] Initializing stats...");
    const batch = writeBatch(db);
    CLERKING_TEMPLATES.forEach(template => {
        const statsRef = doc(db, 'stats', template.id);
        const initialCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        batch.set(statsRef, { count: initialCount }, { merge: true });
    });
    try {
        await batch.commit();
        console.log("[BookmarkService] Stats initialization complete.");
    } catch (error) {
        console.error("Error initializing stats:", error);
    }
};

export const subscribeToUserBookmarks = (userId: string, callback: (bookmarkIds: string[]) => void) => {
    return onSnapshot(collection(db, 'users', userId, 'bookmarks'), (snapshot) => {
        const ids = snapshot.docs.map(doc => doc.id);
        callback(ids);
    });
};
