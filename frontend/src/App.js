import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTruckComponent from "./components/AddTruckComponent";
import BayList from "./components/BayList";
import TruckList from "./components/TruckList";

import Truck from "./model/truck";

function App() {
  const [showAddTruckModal, setShowAddTruckModal] = useState(false);

  const [truckList, setTruckList] = useState([]); // Default no trucks

  const [bayList, setBayList] = useState(Array(12).fill(false));

  useEffect(() => {
    _getTruckLists();
  }, []);

  const _createBayLists = (trucksListsReceived) => {
    // let trucksListsReceived = Array(10).fill(new Truck("1ABC202"));
    let newBayList = Array(12).fill(false);
    for (let i = 0; i < trucksListsReceived.length; i++) {
      if (trucksListsReceived[i].bayAssigned != -1) {
        newBayList[trucksListsReceived[i].bayAssigned - 1] = true;
      }
      let currentTruck = trucksListsReceived[i];

      var newTruck = new Truck(
        currentTruck.registrationNumber,
        currentTruck.arrivalDateTime,
        currentTruck.departureDateTime,
        currentTruck.bayAssigned
      );

      trucksListsReceived[i] = newTruck;
    }
    setBayList(newBayList);
  };

  const _getTruckLists = async () => {
    console.log("Client: Getting truck lists");
    // API call to get truck lists

    let trucksListsReceived = [];
    let response = await fetch("http://localhost:9000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let jsonData = await response.json();
    console.log("Response", jsonData);

    trucksListsReceived = jsonData.truckLists;

    _createBayLists(trucksListsReceived);
    setTruckList(trucksListsReceived);
  };

  const _addTruck = async (addedTruck) => {
    console.log("Adding truck", addedTruck);
    truckList.push(addedTruck);

    // Calling API
    let response = await fetch("http://localhost:9000/truck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedTruck),
    });

    console.log("Response", response);
    _createBayLists(truckList);
    setTruckList([...truckList]);
  };

  const _deleteTruck = async (index) => {
    console.log("Deleting Truck at", index);
    let deletedTruck = truckList[index];
    truckList.splice(index, 1);

    // Calling API
    let response = await fetch(
      `http://localhost:9000/truck/${deletedTruck.registrationNumber}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response", response);

    _createBayLists(truckList);
    setTruckList([...truckList]);
  };

  const _add5mins = async (index) => {
    console.log("Adding 5 mins to departure", index);

    // currentTruck.
    let prevTruck = truckList[index];
    let newTruck = new Truck(
      prevTruck.registrationNumber,
      prevTruck.arrivalDateTime,
      prevTruck.departureDateTime,
      prevTruck.bayAssigned
    );

    // console.log("Before: New Truck", newTruck.departureDateTime);
    newTruck.addFiveMinutesDeparture();
    // console.log("After: New Truck", newTruck.departureDateTime);
    truckList[index] = newTruck;
    let finalList = [...truckList];

    // Calling API
    let response = await fetch(
      `http://localhost:9000/truck/${prevTruck.registrationNumber}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response", response);

    setTruckList(finalList);
    // truckList[index].addFiveMinutesDeparture();
  };

  return (
    <>
      <Container
        fluid
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ccc",
        }}
      >
        <Row style={{ flex: 0.02 }}>
          <h1
            style={{
              textAlign: "center",
              margin: "10px 5px",
              fontWeight: "500",
            }}
          >
            Dynamite Transport
          </h1>
        </Row>
        <Row style={{ flex: 0.98 }}>
          <Col
            xs={11}
            style={{
              // backgroundColor: "red"
              overflow: "auto",
            }}
          >
            <TruckList
              truckList={truckList}
              deleteTruck={_deleteTruck}
              addTruck={_addTruck}
              add5mins={_add5mins}
            />
            <AddTruckComponent
              showModal={showAddTruckModal}
              onOpen={() => setShowAddTruckModal(true)}
              onClose={() => setShowAddTruckModal(false)}
              handleSubmit={_addTruck}
            />
          </Col>
          <Col
            xs={1}
            style={
              {
                // backgroundColor: "green",
              }
            }
          >
            <BayList bayList={bayList} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
