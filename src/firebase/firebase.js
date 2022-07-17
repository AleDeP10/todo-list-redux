// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyHDNYdocxfLFhlr36zxYlLSNGrHCwsdE',
  authDomain: 'todo-list-redux-2be9c.firebaseapp.com',
  projectId: 'todo-list-redux-2be9c',
  storageBucket: 'todo-list-redux-2be9c.appspot.com',
  messagingSenderId: '902925548610',
  appId: '1:902925548610:web:21d3da628a0ff0c4f181db',
  measurementId: 'G-HEF7N9B8WN'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// Get a list of todo-items from your database
async function getTodoList(db) {
  const todoItemsCol = collection(db, 'todo-list');
  const todoItemsSnapshot = await getDocs(todoItemsCol);
  const todoList = todoItemsSnapshot.docs.map(doc => doc.data());
  return todoList;
}