import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCqn65S7ZSOF1ZgfKvbLPZoLLFkipL9G2U',
  authDomain: 'convict-conditioning-deluxe.firebaseapp.com',
  databaseURL: 'https://convict-conditioning-deluxe-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'convict-conditioning-deluxe',
  storageBucket: 'convict-conditioning-deluxe.appspot.com',
  messagingSenderId: '740979843895',
  appId: '1:740979843895:web:2a8c2952adbf009990f0b2',
  measurementId: 'G-CQGBBJJ4Q6'
};

const app = firebase.initializeApp(firebaseConfig);

export default app;