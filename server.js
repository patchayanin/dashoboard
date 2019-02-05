const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

// var admin = require("firebase-admin");
// var serviceAccount = require("./dashboarddb-ccf53-firebase.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://dashboarddb-ccf53.firebaseio.com"
// });

// const db = admin.firestore();

// const preObject = document.getElementById('object');

// const dbrefobject = firebase.database().ref().child()

app.use(cors());
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3001);

app.get('/root', (req, res) => {
    res.send('Root Page')
})

// var userId = "bGlLaGaaIOFyqdtAG5uQ"
// return db.ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   console.log(username)
// });

app.listen(3001, () => {
console.log('ready on http://localhost:3001')
})