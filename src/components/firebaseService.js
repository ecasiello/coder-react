import firebase from "firebase";
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBWew-6BURsm6E9wadOgkBFjviH_9KXmW8",
    authDomain: "ecommercecoderreact-7ed3e.firebaseapp.com",
    projectId: "ecommercecoderreact-7ed3e",
    storageBucket: "ecommercecoderreact-7ed3e.appspot.com",
    messagingSenderId: "190896647316",
    appId: "1:190896647316:web:32438d97b28c05953b1881"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }