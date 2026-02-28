importScripts('https://www.gstatic.com/firebasejs/12.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.10.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCKR5EpLkks03M3aVFf5_UPRg0vXdLAUh0",
  authDomain: "monitor-tv-3745c.firebaseapp.com",
  databaseURL: "https://monitor-tv-3745c-default-rtdb.firebaseio.com",
  projectId: "monitor-tv-3745c",
  storageBucket: "monitor-tv-3745c.firebasestorage.app",
  messagingSenderId: "636551515459",
  appId: "1:636551515459:web:4edbfe729783f7daa533f6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification?.title || "Monitor TV";
  const notificationOptions = {
    body: payload.notification?.body || "Nueva alerta operativa.",
    icon: "/favicon.ico"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
