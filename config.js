import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCyrxGnfo3P2x0Hzu3DvWRojtsQ7tg6QWs",
  authDomain: "e-ride-62bbc.firebaseapp.com",
  projectId: "e-ride-62bbc",
  storageBucket: "e-ride-62bbc.appspot.com",
  messagingSenderId: "986915269484",
  appId: "1:986915269484:web:35c28dcb9f21962458a149"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
