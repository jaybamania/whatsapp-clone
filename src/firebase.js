import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAZLzA6C9Bv0f4CmoM_CG2qpy3igE-QSLw",
    authDomain: "whats-app-clone-df7c4.firebaseapp.com",
    projectId: "whats-app-clone-df7c4",
    storageBucket: "whats-app-clone-df7c4.appspot.com",
    messagingSenderId: "765195307538",
    appId: "1:765195307538:web:8c7b61c234a0824a2d66cb",
    measurementId: "G-HBHV5XY2QP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}

export default db