import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0tJ1Tw8ebP6brhd5H6_SE3Bka7OEQMx4',
  authDomain: 'skingoals-416a2.firebaseapp.com',
  projectId: 'skingoals-416a2',
  storageBucket: 'skingoals-416a2.appspot.com',
  messagingSenderId: '880274160673',
  appId: '1:880274160673:web:63db49c9363fc6a6cbb760',
  measurementId: 'G-J1J86FNY6W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default app;
