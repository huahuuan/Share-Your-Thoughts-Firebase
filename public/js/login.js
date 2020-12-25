function login() {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.location = "dashboard.html"
      // ...
    })
    .catch(function (error) {
      console.log(error);
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = "dashboard.html"
      // User is signed in.
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });