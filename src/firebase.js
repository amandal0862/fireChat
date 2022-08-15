import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCy-GRkXK15yicu4ZKLMA42vBtvjkX8l5I",
    authDomain: "firechat-2c9e8.firebaseapp.com",
    projectId: "firechat-2c9e8",
    storageBucket: "firechat-2c9e8.appspot.com",
    messagingSenderId: "771443298135",
    appId: "1:771443298135:web:e36ccc4965c31941363812"
  };  
  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export {db, auth}


