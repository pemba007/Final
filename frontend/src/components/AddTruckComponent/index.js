import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const AddTruckComponent = ({ showModal, onClose, onOpen, handleSubmit }) => {
  // const set
  const _formSubmit = (e) => {
    e.preventDefault();

    handleSubmit(registrationNumber);
  };

  const [registrationNumber, setRegistrationNumber] = useState("1ABC123");

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
