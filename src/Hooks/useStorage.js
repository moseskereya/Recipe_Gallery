import {
    useState,
    useEffect
} from 'react';
import {
    storage,
    firestorage,
    timestamp
} from '../comps/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = firestorage.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({url, createdAt})
            setUrl(url);
        });
    }, [file]);

    return {
        progress,
        url,
        error
    };
}

export default useStorage;
























// import { useState, useEffect } from 'react'
// import { storage } from "../comps/config"

// const useStorage = (file) => {
//     const [progress, setProgress] = useState(0)
//     const [error, setError] = useState(null)
//     const [url, setUrl] = useState(0)



//     useEffect(() => {
//         const storageReff = storage.ref(file.name);

//         storageReff.put(file).on('state changed', (snap) => {
//             let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
//             setProgress(percentage);
//         }, (error) => {
//             setError(error)
//         }, async () => {
//          const url = await storageReff.getDownloadURL();
//          setUrl(url);
//         })
//     }, [file])

//     return {progress, url, error}


// }
// export default useStorage

