import { initializeApp } from "firebase/app";
import firabase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCTq07LxTkuwtQ9uSR6yKnN_Ox81ugAMJU",
    authDomain: "fb-clone-81b27.firebaseapp.com",
    projectId: "fb-clone-81b27",
    storageBucket: "fb-clone-81b27.appspot.com",
    messagingSenderId: "949628079795",
    appId: "1:949628079795:web:0dc268efc10dccc0a72ac6"
  };

const app = firabase.initializeApp(firebaseConfig)

const db = app.firestore();
const storage = app.storage();

export {db, storage};


