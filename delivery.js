var db = firebase.firestore();

function addData(){
    // Add a new document with a generated id.

    var orderNumber = $('#order_number').val();
    // check that order time is a valid time
    var pickupTime = $('#pickup_time').val();
    var diningHall = $('#myselect').val();
    var name = $('#name').val();
    var phone_number = $('#phone_number').val();
    var dorm = $('#dorm').val();

    var docData = {
        order_number: orderNumber,
        pickup_time: pickupTime,
        dining_hall: diningHall,
        name: name,
        phone_number: phone_number,
        dorm: dorm
    };

    db.collection("orders").doc($('#order_number').val()).set(docData)
    .then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
        alert("Congrats you submitted an order request");
        window.location.href = "https://grubcub.tech";
    })
    .catch(function(error) {
        // console.error("Error adding document: ", error);
    });
}
