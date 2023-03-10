import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

function Offer(props) {

  // Converts creatation date to Uk format
  const offerDate = new Date(props.offer.created_at).toLocaleDateString('en-GB');
  
  return (
    <Accordion.Body className='p-2'>
      {props.offer.user_id === props.user.id ? <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#F4F9F9', padding: '5px', alignItems: 'center', borderRadius: '5px'}}>
        <p style={{ margin: '0', display: 'flex', alignItems: 'center' }}><strong>{offerDate}&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-circle-arrow-right"></i>&nbsp;&nbsp;</strong> Your Offer Amount: £{props.offer.offer_price.toLocaleString()}</p>
        {props.offer.user_id === props.user.id && <Button onClick={() => props.handleOfferDelete(props.offer.id)} variant="danger" size="s">Delete <i className="bi bi-plus-circle-fill ml-2"></i></Button>}
      </div> :
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', alignItems: 'center'}}>
        <p style={{ margin: '0', display: 'flex', alignItems: 'center' }}><strong>{offerDate}&nbsp;&nbsp;&nbsp;</strong> Offer Amount: £{props.offer.offer_price.toLocaleString()}</p>
      </div> }

    </Accordion.Body>
  );
  }

export default Offer;