import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDyHDNYdocxfLFhlr36zxYlLSNGrHCwsdE',
    authDomain: 'todo-list-redux-2be9c.firebaseapp.com',
    databaseURL: 'https://todo-list-redux-2be9c-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'todo-list-redux-2be9c',
    storageBucket: 'todo-list-redux-2be9c.appspot.com',
    messagingSenderId: '902925548610',
    appId: '1:902925548610:web:00771c87d144cd42f181db',
    measurementId: 'G-5ZV1DCM0S0'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log({ userDocRef });
    
    const userSnapshot = await getDoc(userDocRef);
    console.log({ userSnapshot, exists: userSnapshot.exists() });

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}