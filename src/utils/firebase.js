import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    where
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

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }

        const userId = userDocRef._key.path.segments[1];
        console.log({ userId });
        const listDocRef = doc(db, 'list', userId);
        console.log({ listDocRef });

        const listSnapshot = await getDoc(listDocRef);
        console.log({ listSnapshot, exists: listSnapshot.exists() });

        if (!listSnapshot.exists()) {
            try {
                await setDoc(listDocRef, {
                    items: [],
                    userId
                });
            } catch (error) {
                console.log('error creating the todo list', error.message);
            }
        }
    }

    return userDocRef;
}

export const getUserSnapshot = async (userDocRef) => {
    const userSnapshot = await getDoc(userDocRef);
    console.log({ userSnapshot, exists: userSnapshot.exists() });

    return userSnapshot;
}

export const getList = async (userRef) => {
    console.log('getList', userRef);

    const list = [];
    try {
        const listQuery = query(
            collection(db, 'list'),
            where('userId', '==', userRef)
        )

        const listSnapshot = await getDocs(listQuery);
        console.log({listQuery, listSnapshot});

        listSnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(doc.id, " => ", data);
            list.push(data);
        });
    } catch(error) {
        console.log('error while retrieving todo list', error.message);
    }

    return list[0];
}

export const setList = async (userRef, items) => {
    console.log('setList', userRef, items);

    const listDocRef = doc(db, 'list', userRef);
    console.log({ listDocRef });

    try {
        await setDoc(listDocRef, {
            items,
            userId: userRef
        });
    } catch(error) {
        console.log('error while updating the todo list', error.message);
    }
}