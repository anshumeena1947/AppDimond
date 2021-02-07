var firebaseConfig = {
    apiKey: "AIzaSyDiiG8cIwuw0QHMIVBCeaC1JSMPbZoh9Ts",
    authDomain: "dimondapp-60136.firebaseapp.com",
    databaseURL: "https://dimondapp-60136-default-rtdb.firebaseio.com",
    projectId: "dimondapp-60136",
    storageBucket: "dimondapp-60136.appspot.com",
    messagingSenderId: "326330674620",
    appId: "1:326330674620:web:2b99557001e906f3080fb9",
    measurementId: "G-DMP394EJYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var database = firebase.database();