var auth = firebase.auth();
var db = firebase.firestore();
var name, email, uid;
var user = auth.currentUser;

function submitData(){
  var dorm = $('#dorm').val();
  var phoneNumber = $('#phone').val();
  db.collection("users").doc(uid).set({phone: phoneNumber, dorm: dorm});
  window.location.href = "https://jacobaxel.github.io/GrubCub/choose.html"
}

if (user != null) {
  name = user.displayName;
  email = user.email;
  uid = user.uid;

  var welcomeVal = $('#welcome').val();
  welcomeVal = welcomeVal + name + "!!";
  $('#welcome').val(welcomeVal);
} else {
  // user is not logged in
}
