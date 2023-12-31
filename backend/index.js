const express = require("express");
const app = express();
var cors = require("cors");
const port = 9000;

// Enabling Cors
app.use(cors());
app.use(express.json());

// Importing library moment

var moment = require("moment"); // require

moment().format();

const Truck = require("./model/truck");

// Creating Initial TruckList
let truckLists = [];
truckLists.push(
  new Truck("1ABC202", moment().toISOString(), moment().toISOString(), 1)
);
truckLists.push(
  new Truck("1ABC201", moment().toISOString(), moment().toISOString(), -1)
);
truckLists.push(
  new Truck("1ABC204", moment().toISOString(), moment().toISOString(), -1)
);
truckLists.push(
  new Truck("1ABD202", moment().toISOString(), moment().toISOString(), 12)
);
truckLists.push(
  new Truck("1ABA202", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1AVC202", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1ASC202", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1ABA202", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1ABC501", moment().toISOString(), moment().toISOString(), 8)
);
truckLists.push(
  new Truck("1ABC802", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1ABC212", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1BBB112", moment().toISOString(), moment().toISOString())
);
truckLists.push(
  new Truck("1CCCC902", moment().toISOString(), moment().toISOString(), 6)
);

app.get("/", (req, res) => {
  console.log("Getting truckLists", truckLists);

  // Convert array of class objects to list of dictionaries
  const listOfDicts = truckLists.map(
    ({
      registrationNumber,
      arrivalDateTime,
      departureDateTime,
      bayAssigned,
    }) => ({
      registrationNumber,
      arrivalDateTime,
      departureDateTime,
      bayAssigned,
    })
  );

  // Output the resulting list of dictionaries
  // console.log(listOfDicts);

  res.send({
    truckLists: listOfDicts,
  });
});

app.post("/truck", (req, res) => {
  console.log("POST: Req", req.body);
  res.send("Got a POST request");
});

app.put("/truck/:truckId", (req, res) => {
  console.log("PUT: Req", req.params.truckId);
  const truckId = req.params.truckId;
  res.send(`Got a PUT request at /truck for ${truckId}`);
});

app.delete("/truck/:truckId", (req, res) => {
  console.log("DELETE: Req", req.params.truckId);
  const truckId = req.params.truckId;
  res.send(`Got a DELETE request at /truck for ${truckId}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
