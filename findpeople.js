function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function displayUnfulfilled() {
  var ordersRef = db.collection("orders");

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
        var date = new Date(userData["time"]["seconds"]*1000);
        label.innerHTML = " " + userData["location"] + " | " + addZero(date.getHours() % 12) + ":" + addZero(date.getMinutes());

        container.append(input);
        container.append(label);
    })
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
