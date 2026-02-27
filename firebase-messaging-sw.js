importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');

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

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload?.notification?.title || 'Monitor TV';
  const notificationOptions = {
    body: payload?.notification?.body || 'Nueva alerta recibida.',
    icon: payload?.notification?.icon || '/favicon.ico',
    data: payload?.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.click_action || '/';
  event.waitUntil(clients.openWindow(targetUrl));
});
