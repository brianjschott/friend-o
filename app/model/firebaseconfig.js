import {admin} from 'firebase-admin'
import {initializeApp} from "firebase/app";
import {serviceAccount} from './service-account-key.json'
import {getFirestore} from 'firebase/firestore/lite'
import 'dotenv/config'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//Initialize FireStore
const db = getFirestore(firebaseApp)

export {firebaseApp, db}