import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBriUNCBr0vOLDooOyiQouKoJR9f6N0dVc",
  authDomain: "schedule-369104.firebaseapp.com",
  projectId: "schedule-369104",
  storageBucket: "schedule-369104.appspot.com",
  messagingSenderId: "1040584853647",
  appId: "1:1040584853647:web:71cb04556b50475301c8fa",
  measurementId: "G-W8ZD23CMKB",
};

export const app = initializeApp(firebaseConfig);


// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
