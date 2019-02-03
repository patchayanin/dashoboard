import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDwxyJA9mNZ5wrxsi0PnNo-yKpAU_U5ytg",
      authDomain: "dashboarddb-ccf53.firebaseapp.com",
      databaseURL: "https://dashboarddb-ccf53.firebaseio.com",
      projectId: "dashboarddb-ccf53",
      storageBucket: "dashboarddb-ccf53.appspot.com",
      messagingSenderId: "188891754930"
};
firebase.initializeApp(config);
export default firestore;