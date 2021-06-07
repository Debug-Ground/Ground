const admin = require('firebase-admin');
var firebase = require('firebase')
const serviceAccount = require('../path/to/serviceAccountKey.json');

var config = {
	apiKey: "AIzaSyD8-ubMdZ2UaWRklxYrFoN1WXr1LIjNbgI",
	authDomain: "ground-315511.firebaseapp.com",
	databaseURL: "https://ground-315511.firebaseio.com",
	projectId: "ground-315511",
	storageBucket: "ground-315511.appspot.com",
	messagingSenderId: "199700989938"
};

admin.initializeApp({config,
  credential: admin.credential.cert(serviceAccount)
});
const database = admin.firestore();
// facebook url https://ground-315511.firebaseapp.com/__/auth/handler
module.exports = database;