import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "@firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBl-QaSKmK_ze9KIw9lTjlM3ob8xJWBTrA",
    authDomain: "linkedin-clone-a6736.firebaseapp.com",
    projectId: "linkedin-clone-a6736",
    storageBucket: "linkedin-clone-a6736.appspot.com",
    messagingSenderId: "313471838844",
    appId: "1:313471838844:web:99abaeb0546c5dbe9c37f9"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };