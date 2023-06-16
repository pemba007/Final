import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import moment from "moment";
import Truck from "../../model/truck";

const AddTruckComponent = ({ showModal, onClose, onOpen, handleSubmit }) => {
  // const set
  const _formSubmit = (e) => {
    e.preventDefault();

    if (registrationNumber) {
      let new_arrivalDateTime = arrivalDateTime
        ? moment(arrivalDateTime).toISOString()
        : null;
      let new_departureDateTime = departureDateTime
        ? moment(departureDateTime).toISOString()
        : null;
      let new_bayAssigned = bayAssigned ? bayAssigned : -1;
      handleSubmit(
        new Truck(
          registrationNumber,
          new_arrivalDateTime,
          new_departureDateTime,
          new_bayAssigned
        )
      );

      onClose();
    }
  };

  const [registrationNumber, setRegistrationNumber] = useState("1ABC123");
  const [arrivalDateTime, setArrivalDateTime] = useState();
  const [departureDateTime, setDepartureDateTime] = useState();
  const [bayAssigned, setBayAssigned] = useState();

  const handleChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  return (
    <>
      <div style={{ display: "grid", alignItems: "center", margin: "10px" }}>
        <Button variant='primary' onClick={onOpen}>
          Add Truck
        </Button>
      </div>

      <Offcanvas show={showModal} onHide={onClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Truck</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={_formSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Truck Registration Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='1ABC123'
                value={registrationNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Truck Arrival Date Time</Form.Label>
              <Form.Control
                type='datetime-local'
                // placeholder=''
                value={arrivalDateTime}
                onChange={(e) => {
                  setArrivalDateTime(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Truck Departure Date Time</Form.Label>
              <Form.Control
                type='datetime-local'
                // placeholder='1ABC123'
                value={departureDateTime}
                onChange={(e) => {
                  setDepartureDateTime(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Bay Assigned</Form.Label>
              <Form.Control
                type='text'
                placeholder='1-12'
                value={bayAssigned}
                onChange={(e) => setBayAssigned(e.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddTruckComponent;
