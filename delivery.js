var db = firebase.firestore();

function addData(){
    // Add a new document with a generated id.

    var orderNumber = $('#order_number').val().parseInt();
    // check that order time is a valid time
    var orderTime = $('#order_time').val();
    var diningHall = $('#myselect option:selected').val();
    var name = $('#name').val();
    var phone_number = $('#phone_number').val().parseInt();
    var dorm = $('#dorm').val();

    db.collection("orders").add({
        order_number: orderNumber,
        order_time: orderTime,
        dining_hall: diningHall,
        name: name,
        phone_number: phone_number,
        dorm: dorm
    })
    .then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        // console.error("Error adding document: ", error);
    });
}
