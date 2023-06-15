const express = require("express");
const app = express();
var cors = require("cors");
const port = 9000;

// Enabling Cors
app.use(cors());

// Importing library moment

var moment = require("moment"); // require

moment().format();

const Truck = require("./model/truck");

// Creating Initial TruckList
let truckLists = [];
truckLists.push(new Truck("1ABC202", moment.now(), moment.now(), 1));
truckLists.push(new Truck("1ABC201", moment.now(), moment.now(), -1));
truckLists.push(new Truck("1ABC204", moment.now(), moment.now(), -1));
truckLists.push(new Truck("1ABD202", moment.now(), moment.now(), 12));
truckLists.push(new Truck("1ABA202", moment.now(), moment.now()));
truckLists.push(new Truck("1AVC202", moment.now(), moment.now()));
truckLists.push(new Truck("1ASC202", moment.now(), moment.now()));
truckLists.push(new Truck("1ABA202", moment.now(), moment.now()));
truckLists.push(new Truck("1ABC501", moment.now(), moment.now(), 8));
truckLists.push(new Truck("1ABC802", moment.now(), moment.now()));
truckLists.push(new Truck("1ABC212", moment.now(), moment.now()));
truckLists.push(new Truck("1BBB112", moment.now(), moment.now()));
truckLists.push(new Truck("1CCCC902", moment.now(), moment.now(), 6));

const val = moment.now();
console.log(typeof val);
console.log("Formated", moment(val).format("MMMM Do YYYY, h:mm:ss a"));

app.get("/", (req, res) => {
  console.log("Getting truckLists", truckLists);
  res.send({
    truckLists: truckLists,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
