function displayUnfulfilled() {
  var ordersRef = db.collection("orders");

//   docRef.orderBy("time");

  ordersRef.get().then(function(querySnapshot) {
    var list = document.getElementById("orders");

    querySnapshot.forEach(function(doc) {
        var userData = doc.data();

        console.log(userData);
        console.log(list);

        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", userData["id"]);
        input.setAttribute("name", userData["id"]);
        input.setAttribute("value", userData["time"]);

        var label = document.createElement("Label");
        label.setAttribute("htmlfor", userData["id"]);
        label.setAttribute("innerHTML", "Location: ", userData["location"], ", Time: ", userData["time"]);

        list.appendChild(input);
    })

    // if (doc.exists) {
    //     console.log("Document data:", doc.data());

    //     var myDataMap = doc.data();
    //     times = myDataMap["times"];
    //     var i;
    //     for (i = 0; i < times.length; i++) {
    //         var list = document.getElementById('order list');

    //         var node = document.createElement("li");
    //         var textnode = document.createTextNode(times[i]);
    //         node.appendChild(textnode);
    //         list.appendChild(node);
    //     }

    // } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}