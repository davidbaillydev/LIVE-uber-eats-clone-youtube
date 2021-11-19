import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAGWjyCb4V5to0igDsconS2YuYqaQbotRQ",
  authDomain: "uber-eats-332321.firebaseapp.com",
  projectId: "uber-eats-332321",
  storageBucket: "uber-eats-332321.appspot.com",
  messagingSenderId: "461239992069",
  appId: "1:461239992069:web:28a13e5e5e12497848c16c"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

