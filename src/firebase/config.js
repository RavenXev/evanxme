import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6jXLDOGMG5plhsZ5D0CNvpw6uw1t9uv0",
    authDomain: "evanxme-f3980.firebaseapp.com",
    projectId: "evanxme-f3980",
    storageBucket: "evanxme-f3980.appspot.com",
    messagingSenderId: "58161718186",
    appId: "1:58161718186:web:398a4f2d8ab9778260c1d3",
    measurementId: "G-9CFNR05WZZ"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const firestore = firebase.firestore()

  export {firestore}