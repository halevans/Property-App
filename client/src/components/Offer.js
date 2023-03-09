import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

function Offer(props) {

  const offerDate = new Date(props.offer.created_at).toLocaleDateString('en-GB');

  const handleOfferDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this offer?');
    if (confirmed) {
      deleteOffer(props.token, props.offer.id)
      console.log("Offer Deleted")
    }
  }

  return (
    <Accordion.Body>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p><strong>{offerDate}:</strong> Offer amount: £{props.offer.offer_price.toLocaleString()}</p>
        <Button onClick={() => props.handleOfferDelete(props.offer.id)} variant="primary" size="sm">Delete Offer <i className="bi bi-plus-circle-fill ml-2"></i></Button>
      </div>
    </Accordion.Body>
  );
  }

export default Offer;