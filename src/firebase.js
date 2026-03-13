import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAExmd0H7BvODVCubXaKi0IJdG9EQzvnc",
  authDomain: "sensores-cc9ca.firebaseapp.com",
  databaseURL: "https://sensores-cc9ca-default-rtdb.firebaseio.com",
  projectId: "sensores-cc9ca",
  storageBucket: "sensores-cc9ca.firebasestorage.app",
  messagingSenderId: "793533503497",
  appId: "1:793533503497:web:b2addab8efd01c3fee80d8"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);