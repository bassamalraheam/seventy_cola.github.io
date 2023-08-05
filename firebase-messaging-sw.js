importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyDn0DSVPWtjA7s61d0V9zjwF_yt6T_R3sk',
    appId: '1:854361804560:web:7ab29efa50fbc11f5fdf95',
    messagingSenderId: '854361804560',
    projectId: 'cola-aedfe',
    authDomain: 'cola-aedfe.firebaseapp.com',
    storageBucket: 'cola-aedfe.appspot.com',
    measurementId: 'G-8NHYEL5C4P',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    click_action: payload.notification.click_action
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
