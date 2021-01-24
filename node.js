function pickUpFood(){
  window.location.href = "https://grubcub.tech/deliverer.html";
}

function requestDelivery(){
  window.location.href = "https://grubcub.tech/delivery.html";
}

function orderStatus(){
  window.location.href = "https://grubcub.tech/status.html";
}


// var auth = firebase.auth();
// var db = firebase.firestore();
//
// var uid;
// var name;
// var email;
//
// auth.onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     uid = user.uid;
//     name = user.displayName;
//     email = user.email;
//
//     // check if user just signed up
//     var docRef = db.collection("users").doc(uid);
//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             // welcome back user
//             var userDataMap = doc.data();
//             // do stuff with user data
//         } else {
//             // doc.data() will be undefined in this case
//             db.collection("users").doc(uid).set({uid: uid, name: name, email: email});
//             window.location.href = "https://jacobaxel.github.io/GrubCub/welcome.html"
//         }
//     }).catch(function(error) {
//         // console.log("Error getting document:", error);
//     });
//
//   } else {
//     // user is not signed in
//     // window.location.href = "https://jacobaxel.github.io/Aux/linkgenerator/login.html";
//   }
// });
