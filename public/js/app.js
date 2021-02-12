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

var globalRendomNumber = 0;
var totalUserCoins = 0;
var HTMLcoins = document.getElementById('coins');
var userID = localStorage.getItem('userID');
console.log(userID)
var firebaseDB = database.ref('users/'+userID).child('coins');
firebaseDB.on('value', snap => setTimeout(totalUserCoins = snap.val(), 3000));
function assignTotalCoins(){
  localStorage.setItem('UserCoins',totalUserCoins);
  HTMLcoins.innerText = localStorage.getItem('UserCoins');
}
HTMLcoins.innerText = localStorage.getItem('UserCoins');
setTimeout(() => {
  console.log("i am runig")
  assignTotalCoins();
}, 4000);
function RendomNumberGenerator(){
  return Math.floor(Math.random()*11);
}
function rendomNumberassin(){
  globalRendomNumber = RendomNumberGenerator();
  console.log('global number is '+globalRendomNumber)
}
function RendomImg(a){
  return '/card/'+a+'.svg';
}
function Dimond(){
  rendomNumberassin();
  $('#elem').wScratchPad({
    size        : 90,          // The size of the brush/scratch.
    bg          : RendomImg(globalRendomNumber),  // Background (image path or hex color).
    fg          : '#6699ff',  // Foreground (image path or hex color).
  });
}
Dimond();

function collect(){
  let tempNumber = totalUserCoins += globalRendomNumber;
  console.log(tempNumber);
  database.ref('users/' + userID).set({
    coins: tempNumber
  });
  window.location.reload();

}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}