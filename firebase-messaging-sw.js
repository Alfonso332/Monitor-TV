importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCKR5EpLkks03M3aVFf5_UPRg0vXdLAUh0",
  authDomain: "monitor-tv-3745c.firebaseapp.com",
  projectId: "monitor-tv-3745c",
  messagingSenderId: "636551515459",
  appId: "1:636551515459:web:4edbfe729783f7daa533f6"
});

const messaging = firebase.messaging();
