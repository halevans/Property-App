import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

function Offer(props) {

  const offerDate = new Date(props.offer.created_at).toLocaleDateString('en-GB');
  return (
    <Accordion.Body>
      {props.offer.user_id == props.user.id ? <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#F0F8FF', padding: '5px', alignItems: 'center'}}>
        <p style={{ margin: '0', display: 'flex', alignItems: 'center' }}><strong>{offerDate}:</strong> Offer amount: £{props.offer.offer_price.toLocaleString()}</p>
        {props.offer.user_id == props.user.id && <Button onClick={() => props.handleOfferDelete(props.offer.id)} variant="danger" size="s">Delete <i className="bi bi-plus-circle-fill ml-2"></i></Button>}
      </div> :
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', alignItems: 'center'}}>
        <p style={{ margin: '0', display: 'flex', alignItems: 'center' }}><strong>{offerDate}:</strong> Offer amount: £{props.offer.offer_price.toLocaleString()}</p>
      </div> }

    </Accordion.Body>
  );
  }

export default Offer;