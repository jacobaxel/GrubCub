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

        // console.log(userData["time"]["seconds"]);
        // console.log(container);

        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", userData["user[]"]);
        input.setAttribute("name", "box");
        input.setAttribute("value", userData["time"]);

        var label = document.createElement("Label");
        label.setAttribute("for", userData["user"]);
        var date = new Date(userData["time"]["seconds"]*1000);
        label.innerHTML = " " + addZero(date.getHours() % 12) + ":" + addZero(date.getMinutes()) + " | Deliver To: " + userData["location"] + "\n\n";

        container.append(input);
        container.append(label);
    })
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

var btn = document.getElementById("submit");

btn.addEventListener("click", confirmation);

function confirmation() {
  console.log("confirmation clicked");

  let checked = $("#checklist input[type=checkbox]:checked");

  // checked.forEach(function(order) {
  //   console.log(order);
  // });

  console.log(checked);

  return false;
}
