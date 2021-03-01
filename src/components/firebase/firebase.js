import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5sNsgBn069lx6IW_BD9Ftrqb1rxE_GP8",
    authDomain: "bpateam-2e120.firebaseapp.com",
    projectId: "bpateam-2e120",
    storageBucket: "bpateam-2e120.appspot.com",
    messagingSenderId: "1028754851263",
    appId: "1:1028754851263:web:5245b5efdcc47657994d0a",
    measurementId: "G-4N7KXQTP03"
  };

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase