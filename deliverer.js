function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function displayUnfulfilled() {

  var ordersRef = db.collection("orders");

  ordersRef.get().then(function(querySnapshot) {
    var container = document.getElementById("checklist");

    var counter = 0;

    querySnapshot.forEach(function(doc) {
        counter++;

        if (counter > 20) {
            return false;
        }

        var userData = doc.data();

        console.log(userData["time"]);
        console.log(container);

        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", userData["order_number"]);
        input.setAttribute("name", "name");
        input.setAttribute("value", userData["pickup_time"]);

        var label = document.createElement("Label");
        label.setAttribute("for", userData["user"]);
        // var date = new Date(userData["time"]["seconds"]*1000);
        label.innerHTML = userData["pickup_time"] + " | Pickup From: " + userData["dining_hall"] + " | Deliver To: " + userData["dorm"]
        // " " + addZero(date.getHours() % 12) + ":" + addZero(date.getMinutes()) + " | Deliver To: " + userData["location"];

        container.append(input);
        container.append(label);

        // var par = document.createElement("p");
        // par
        // var textnode = document.createTextNode('<br/>');
        // container.append(textnode);
        $('#checklist').append("<br>");
        
    })
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

var btn = document.getElementById("submit");

if(btn) {
  btn.addEventListener("click", confirmation);
}

function confirmation() {
  console.log("confirmation clicked");

  let checked = $("#checklist input[type=checkbox]:checked");

  // checked.forEach(function(order) {
  //   console.log(order);
  // });

  console.log(checked);

  return false;
}
