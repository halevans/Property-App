import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { newProperty } from '../ApiConfig/api';

function PropertyFormModal(props) {

  const [propertyDetails, setPropertyDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  }

  const handleAddPropertySubmit = (e) => {
    e.preventDefault();
    
    const property_info = {
      user_id: props.user.id,
      asking_price: propertyDetails.asking_price,
      no_rooms: propertyDetails.no_rooms,
      img_url: propertyDetails.img_url
    }
    newProperty(props.user.token, property_info)
    .then((response) => {
      props.handleAddProperty(response.data)
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <Modal
      backdrop="static"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>Make Offer</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleAddPropertySubmit}>
          <Form.Group className="mb-3" controlId="LoginFormEmail">
            <Form.Label>Asking Price:</Form.Label>
            <Form.Control
              type="number"
              step={10000}
              name="asking_price"
              placeholder="Enter asking price..."
              onChange={handleInputChange} />
            <Form.Label>No. of Rooms:</Form.Label>
            <Form.Control
              type="number"
              name="no_rooms"
              placeholder="Enter no. of rooms..."
              onChange={handleInputChange} />
            <Form.Label>Img URL:</Form.Label>
            <Form.Control
              type="url"
              name="img_url"
              placeholder="Enter IMG url..."
              onChange={handleInputChange} />
          </Form.Group>
          <Button type="submit" onClick={props.onHide}>Submit Offer</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PropertyFormModal;