import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt4iKk3ox1YHTxD6NtzQ_u8AojbIwaBos",
  authDomain: "programmazione-eventi-mc.firebaseapp.com",
  projectId: "programmazione-eventi-mc",
  storageBucket: "programmazione-eventi-mc.appspot.com",
  messagingSenderId: "553569852307",
  appId: "1:553569852307:web:59f03159bac02c89fba666",
  databaseURL:
    "https://programmazione-eventi-mc-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
