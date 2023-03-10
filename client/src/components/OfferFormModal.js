import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { newOffer } from '../ApiConfig/api';

function OfferFormModal(props) {

  const [offerPrice, setOfferPrice] = useState(null);

  // Tracks user input of the offer price
  const handleInputChange = (e) => {
    setOfferPrice(e.target.value);
  }

  // Handles offer submit, making an api call and updating the page
  const handleOfferSubmit = (e) => {
    e.preventDefault();
    const offer_info = {
      user_id: props.user.id,
      house_id: props.propertyDetails.id,
      offer_price: offerPrice
    }
    // Api call to add offer to db
    newOffer(props.user.token, offer_info)
    .then((response) => {
      // Call the callback function passed from PropertyItem to update the state with the newly added offer
      props.handleOfferAdded(response.data);
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
          <p>Asking price: £{props.propertyDetails.asking_price.toLocaleString()}</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleOfferSubmit}>
          <Form.Group className="mb-3" controlId="LoginFormEmail">
            <Form.Label>Offer Price:</Form.Label>
            <Form.Control
              type="number"
              step={100}
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