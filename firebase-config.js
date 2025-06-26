// پێویستە بگۆڕی بە زانیاریە تایبەتی خۆت لە Firebase Console

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFK_yO1iw5GSAYjA-W2Uf6axNZLhHy4oo",
  authDomain: "as-dominos.firebaseapp.com",
  projectId: "as-dominos",
  storageBucket: "as-dominos.firebasestorage.app",
  messagingSenderId: "1052009414343",
  appId: "1:1052009414343:web:2b12d053aa0f09349648e2",
  measurementId: "G-8K5GVNHNFQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.firebaseDB = db;
