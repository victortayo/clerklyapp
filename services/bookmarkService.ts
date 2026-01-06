
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
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { CLERKING_TEMPLATES } from '../data';

export interface TemplateStats {
    id: string;
    count: number;
}

export const toggleBookmark = async (userId: string, templateId: string) => {
    const bookmarkRef = doc(db, 'users', userId, 'bookmarks', templateId);
    const statsRef = doc(db, 'stats', templateId);

    try {
        await runTransaction(db, async (transaction) => {
            const bookmarkDoc = await transaction.get(bookmarkRef);

            if (bookmarkDoc.exists()) {
                transaction.delete(bookmarkRef);
                transaction.update(statsRef, { count: increment(-1) });
            } else {
                transaction.set(bookmarkRef, { bookmarkedAt: new Date().toISOString() });
                transaction.set(statsRef, { count: increment(1) }, { merge: true });
            }
        });
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
        callback(stats);
    });
};

export const initializeStats = async () => {
    try {
        for (const template of CLERKING_TEMPLATES) {
            const statsRef = doc(db, 'stats', template.id);
            const statsDoc = await getDoc(statsRef);

            if (!statsDoc.exists()) {
                const initialCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                await setDoc(statsRef, { count: initialCount });
            }
        }
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
