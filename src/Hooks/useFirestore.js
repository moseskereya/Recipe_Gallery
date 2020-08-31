import {
    useState,
    useEffect
} from 'react';
import {
    firestorage
} from '../comps/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = firestorage.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
                setDocs(documents);
            });

        return () => unsub();
    }, [collection]);

    return {
        docs
    };
}

export default useFirestore;