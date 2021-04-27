import firebase from 'firebase';
import {firebaseConfig} from './firebase-config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db};