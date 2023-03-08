import React from 'react';
import { Accordion } from 'react-bootstrap';

function Offer(props) {

  const offerDate = new Date(props.offer.created_at).toLocaleDateString('en-GB');

  return (
    <Accordion.Body>
      <p><strong>{offerDate}:</strong> Offer amount: £{props.offer.offer_price.toLocaleString()}</p>
    </Accordion.Body>
  );
  }

export default Offer;