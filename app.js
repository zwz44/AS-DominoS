import { ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = window.firebaseDB;
let currentRoom = "";

function createRoom() {
  const code = Math.random().toString(36).substr(2, 6);
  currentRoom = code;
  set(ref(db, 'rooms/' + code), {
    board: [],
    players: [],
    status: "waiting"
  });
  document.getElementById('gameBoard').style.display = 'block';
  document.getElementById('roomSetup').style.display = 'none';
  document.getElementById('gameStatus').innerText = `کۆدی یاری: ${code}`;
}

function joinRoom() {
  const code = document.getElementById('roomCode').value.trim();
  if (!code) return alert("تکایە کۆدی یاری بنووسە");
  currentRoom = code;
  const roomRef = ref(db, 'rooms/' + code);
  get(roomRef).then(snapshot => {
    if (!snapshot.exists()) {
      alert("یاری نەدۆزرایەوە");
      return;
    }
    document.getElementById('gameBoard').style.display = 'block';
    document.getElementById('roomSetup').style.display = 'none';
    document.getElementById('gameStatus').innerText = `بەشداری کرا بە کۆدی: ${code}`;
  });
}

// زیادکردنی کارەکان دواتر بۆ گەشەپێدان و نیشاندانی domino و logic