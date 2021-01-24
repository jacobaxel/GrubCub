var submitted = 0;

var counter = 0;

function displayUnfulfilled() {

  submitted = 0;

  counter = 0;

  var ordersRef = db.collection("orders");

  var container = document.getElementById("checklist");

  ordersRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

        // Limits the number of orders displayed to 20
        counter++;
        if (counter > 20) {
            return false;
        }

        var userData = doc.data();

        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", userData["order_number"]);
        input.setAttribute("value", userData["pickup_time"]);

        var label = document.createElement("Label");
        label.setAttribute("for", userData["order_number"]);
        label.innerHTML = userData["pickup_time"] + " | Pickup From: " + userData["dining_hall"] + " | Deliver To: " + userData["dorm"];

        container.append(input);
        container.append(label);

        $('#checklist').append("<br>");
        
    })

    if (counter == 0) {
      var tag = document.createElement("p");
      var text = document.createTextNode("No Orders Available For Pickup");
      tag.appendChild(text);
      container.appendChild(tag);
    }

  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}

var btn = document.getElementById("submit");
if (btn) { btn.addEventListener("click", confirmation); }

function confirmation() {
  if (submitted == 1) {
    return;
  } else {
    submitted = 1;
  }

  if (counter == 0) {
    alert("No Orders Selected!");
    counter = 0;
    submitted = 0;
    window.location.href = "https://jacobaxel.github.io/GrubCub/deliverer.html";
  } else if (counter > 3) {
    alert("Too Many Orders Selected!");
    counter = 0;
    submitted = 0;
    window.location.href = "https://jacobaxel.github.io/GrubCub/deliverer.html";
  }

  var ordersRef = db.collection("orders");

  let checked = $("#checklist input[type=checkbox]:checked");
  var checked_order_numbers = [];

  var i;
  for(i = 0; i < checked.length; i++) {
    checked_order_numbers[i] = checked[i].id;
  }

  // console.log(checked_order_numbers);

  ordersRef.get().then(function(querySnapshot) {
    var container = document.getElementById("answers");

    var tag = document.createElement("h1");
    var text = document.createTextNode("Please Pickup And Deliver The Meals Below:");
    tag.appendChild(text);
    container.appendChild(tag);

    counter = 1;

    var tag = document.createElement("h1");
    var text = document.createTextNode("(Please Contact Recipients About Any Problems)");
    tag.appendChild(text);
    container.appendChild(tag);

    querySnapshot.forEach(function(doc) {

        // console.log(doc);

        var userData = doc.data();

        if (checked_order_numbers.indexOf(userData["order_number"]) > -1) {
          ordersRef.doc(userData["order_number"]).delete().then(function() {
            var tag = document.createElement("p");
            var text = document.createTextNode(counter + ": " + userData["pickup_time"] + " | Pickup From: " + userData["dining_hall"] + " | Deliver To: " + userData["dorm"] + " | Order Number: " + userData["order_number"] + " | Phone Number: " + userData["phone_number"]);
            tag.appendChild(text);
            container.appendChild(tag);

            counter++;
            console.log("Document Successfully Deleted!");

          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
        }
        
    })

    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

  return false;
}
