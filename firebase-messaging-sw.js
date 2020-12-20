importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
   apiKey: "AIzaSyCdbLBXVeVnKD-xf7t5zUyOR8MP6U1H3Q8",
    authDomain: "desifarmings.firebaseapp.com",
    databaseURL: "https://desifarmings-default-rtdb.firebaseio.com",
    projectId: "desifarmings",
    storageBucket: "desifarmings.appspot.com",
    messagingSenderId: "796274608747",
    appId: "1:796274608747:web:14e2d1b71d78fe7718ff2e",
    measurementId: "G-SEM2NKKY3X"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});