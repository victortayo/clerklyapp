
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

        // Initialize with default values for all templates to prevent UI lag
        CLERKING_TEMPLATES.forEach(t => {
            stats[t.id] = 0;
        });

        snapshot.forEach((doc) => {
            stats[doc.id] = doc.data().count || 0;
        });

        callback(stats);
    }, (error) => {
        console.error("Error subscribing to stats:", error);
        // On error (e.g. permission denied), we might want to just keep the defaults
        // or clear the stats. For now, we'll keep what we have or defaults.
    });
};

export const initializeStats = async () => {
    console.log("[BookmarkService] Checking and initializing stats...");
    const statsCollection = collection(db, 'stats');
    const templateIds = CLERKING_TEMPLATES.map(t => t.id);

    if (templateIds.length === 0) return;

    try {
        // Firestore 'in' query limit is 30. We need to batch.
        const chunkSize = 30;
        const chunks = [];
        for (let i = 0; i < templateIds.length; i += chunkSize) {
            chunks.push(templateIds.slice(i, i + chunkSize));
        }

        const existingStats = new Map<string, number>();

        // Run queries in parallel
        await Promise.all(chunks.map(async (chunk) => {
            const snapshot = await getDocs(query(statsCollection, where('__name__', 'in', chunk)));
            snapshot.docs.forEach(doc => {
                existingStats.set(doc.id, doc.data().count);
            });
        }));

        const batch = writeBatch(db);
        let hasWrites = false;

        CLERKING_TEMPLATES.forEach(template => {
            const currentCount = existingStats.get(template.id);
            if (currentCount === undefined || currentCount === 0) {
                const statsRef = doc(db, 'stats', template.id);
                // Initialize with a random count between 10 and 30
                const initialCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
                console.log(`[BookmarkService] Initializing count for ${template.id} to ${initialCount}`);
                batch.set(statsRef, { count: initialCount }, { merge: true });
                hasWrites = true;
            }
        });

        if (hasWrites) {
            await batch.commit();
            console.log("[BookmarkService] Stats initialization complete.");
        } else {
            console.log("[BookmarkService] All stats already initialized.");
        }
    } catch (error) {
        console.error("Error initializing stats:", error);
    }
};

export const subscribeToUserBookmarks = (userId: string, callback: (bookmarkIds: string[]) => void) => {
    return onSnapshot(collection(db, 'users', userId, 'bookmarks'), (snapshot) => {
        const ids = snapshot.docs.map(doc => doc.id);
        callback(ids);
    }, (error) => {
        console.error("Error subscribing to user bookmarks:", error);
        // Clear bookmarks on error (e.g. permission lost)
        callback([]);
    });
};
