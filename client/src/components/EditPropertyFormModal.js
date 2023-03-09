import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { editProperty } from '../ApiConfig/api';

function EditPropertyFormModal(props) {

  const [propertyDetails, setPropertyDetails] = useState(props.propertyDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  }

  const handleAddPropertySubmit = (e) => {
    e.preventDefault();
    
    const property_info = {
      user_id: props.user.id,
      house_id: props.propertyDetails.id,
      asking_price: propertyDetails.asking_price,
      no_rooms: propertyDetails.no_rooms,
      img_url: propertyDetails.img_url
    }
    editProperty(props.user.token, property_info)
    .then((response) => {
      props.handleEditProperty(response.data)
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
          <p>Edit Your Property Details...</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleAddPropertySubmit}>
          <Form.Group className="mb-3" controlId="LoginFormEmail">
            <Form.Label>Asking Price:</Form.Label>
            <Form.Control
              type="number"
              step={100}
              name="asking_price"
              placeholder="Enter asking price..."
              onChange={handleInputChange} 
              value={propertyDetails.asking_price}/>
            <Form.Label>No. of Rooms:</Form.Label>
            <Form.Control
              type="number"
              name="no_rooms"
              placeholder="Enter no. of rooms..."
              onChange={handleInputChange} 
              value={propertyDetails.no_rooms}/>
            <Form.Label>Img URL:</Form.Label>
            <Form.Control
              type="url"
              name="img_url"
              placeholder="Enter IMG url..."
              onChange={handleInputChange}
              value={propertyDetails.img_url} />
          </Form.Group>
          <Button type="submit" onClick={props.onHide}>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditPropertyFormModal;