import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB0tJ1Tw8ebP6brhd5H6_SE3Bka7OEQMx4',
  authDomain: 'skingoals-416a2.firebaseapp.com',
  databaseURL: 'https://skingoals-416a2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'skingoals-416a2',
  storageBucket: 'skingoals-416a2.appspot.com',
  messagingSenderId: '880274160673',
  appId: '1:880274160673:web:63db49c9363fc6a6cbb760',
  measurementId: 'G-J1J86FNY6W',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Get a reference to the database service
export const db = getDatabase(app);
