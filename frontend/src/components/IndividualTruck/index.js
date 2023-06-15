import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const IndividualTruck = ({ truck, onDelete, onAdd5Mins }) => {
  return (
    <>
      <Card
        style={{ width: "18rem", margin: "20px" }}
        // border={truck.bayAssigned != -1 ? "success" : "danger"}
        bg={truck.bayAssigned != -1 ? "success" : "primary"}
        text='white'
      >
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {truck.registrationNumber}
          {truck.bayAssigned != -1 ? (
            <span>Bay : {truck.bayAssigned}</span>
          ) : null}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            Arrival Date Time :
            <br />
            {truck.arrivalDateTime
              ? moment(truck.arrivalDateTime).format("MMMM Do YYYY, h:mm:ss a")
              : "Not Available"}
          </Card.Text>
          <Card.Text>
            Departure Date Time:
            <br />
            {truck.departureDateTime
              ? moment(truck.departureDateTime).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : "Not Available"}
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant='light' onClick={onDelete}>
              Delete Truck
            </Button>
            <Button variant='light' onClick={onAdd5Mins}>
              Add 5 mins
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualTruck;
