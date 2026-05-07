import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNa-XaImVcuYlsVv7iYWc0oFgJc9Wl23c",
  authDomain: "inhouse-265a1.firebaseapp.com",
  projectId: "inhouse-265a1",
  storageBucket: "inhouse-265a1.appspot.com",
  messagingSenderId: "376505203354",
  appId: "1:376505203354:web:9652de1df8b7f31859bd23"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
