var provider = new firebase.auth.GoogleAuthProvider();
var userID;
function checkLogin(){
    console.log("checkLogin() is running")
    if(localStorage.getItem('userID')){
        window.location.assign('/app.html')
    }
    else{
        window.location.reload();
    }
}
function GoogleSignIn() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            console.log(credential)

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            userID = user.uid;
            console.log(userID);
            localStorage.setItem('userID',userID);
            checkLogin();
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode+' and '+errorMessage)
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}