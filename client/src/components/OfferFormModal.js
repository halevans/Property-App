import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { newOffer } from '../ApiConfig/api';

function OfferFormModal(props) {

  const [offerPrice, setOfferPrice] = useState(null);

  const handleInputChange = (e) => {
    setOfferPrice(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(offerPrice);
    console.log(props.user);
    console.log(props.propertyDetails);
    const offer_info = {
      user_id: props.user.id,
      house_id: props.propertyDetails.id,
      offer_price: offerPrice
    }
    newOffer(props.user.token, offer_info)
    .then((response) => {
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
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="LoginFormEmail">
            <Form.Label>Offer Price:</Form.Label>
            <Form.Control
              type="number"
              step={10000}
              name="offerPrice"
              placeholder="Enter offer price"
              onChange={handleInputChange} />
          </Form.Group>
          <Button type="submit" onClick={props.onHide}>Submit Offer</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default OfferFormModal;