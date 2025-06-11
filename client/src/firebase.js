// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-bog.firebaseapp.com',
  projectId: 'mern-bog',
  storageBucket: 'mern-bog.appspot.com',
  messagingSenderId: '1026443668344',
  appId: '1:1026443668344:web:00fe4b4294ce70ff3ef68d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
