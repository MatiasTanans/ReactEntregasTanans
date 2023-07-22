import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4pl7xyp_cFJgSmt_khzu8CGkj0oBJH90",
  authDomain: "react-43290-tanans.firebaseapp.com",
  projectId: "react-43290-tanans",
  storageBucket: "react-43290-tanans.appspot.com",
  messagingSenderId: "859470992216",
  appId: "1:859470992216:web:eb4081faadde65a1e34b2d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
