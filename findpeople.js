function displayUnfulfilled() {
  var ordersRef = db.collection("orders");

//   docRef.orderBy("time");

  ordersRef.get().then(function(querySnapshot) {
    var container = document.getElementById("container");

    querySnapshot.forEach(function(doc) {
        var userData = doc.data();

        console.log(userData["time"]["seconds"]);
        console.log(container);

        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", userData["user"]);
        input.setAttribute("name", userData["user"]);
        input.setAttribute("value", userData["time"]);

        var label = document.createElement("Label");
        label.setAttribute("for", userData["user"]);
        var date = new Date(userData["time"]["seconds"]);
        label.innerHTML = "Location: " + userData["location"] + " | Time: " + date.getFullYear();
        // label.setAttribute("innerHTML", "Location: ", userData["location"], ", Time: ", userData["time"]);

        container.append(input);
        container.append(label);
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
