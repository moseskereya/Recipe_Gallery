import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDQxsHPsiNFHDsBJE2-yVqZG7ZlpVPG71I",
    authDomain: "recipes-a71d9.firebaseapp.com",
    databaseURL: "https://recipes-a71d9.firebaseio.com",
    projectId: "recipes-a71d9",
    storageBucket: "recipes-a71d9.appspot.com",
    messagingSenderId: "706103632085",
    appId: "1:706103632085:web:d59c6def2521deccde825c"
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestorage = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {
    storage,
    firestorage,
    timestamp
};