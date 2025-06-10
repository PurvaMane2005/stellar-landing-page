import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtqz2ooR7HAcxw3CmVS9nxzudDHfcaz5U",
  authDomain: "early-access-2049d.firebaseapp.com",
  projectId: "early-access-2049d",
  storageBucket: "early-access-2049d.firebasestorage.app",
  messagingSenderId: "463193415690",
  appId: "1:463193415690:web:e0709f719c23b20590bff3",
  measurementId: "G-Y75Q0Z6HFH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };