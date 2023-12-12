// import {initializeApp} from 'firebase-admin/app'
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// import serviceAccount from './service-account-key'
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// })

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//Initialize FireStore
const db = getFirestore(firebaseApp)

export {firebaseApp, db}