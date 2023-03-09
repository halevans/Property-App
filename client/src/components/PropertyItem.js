import { Button, Container, Card, Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { getOffers } from '../ApiConfig/api';
import Offer from './Offer';
import OfferFormModal from './OfferFormModal';


function PropertyItem(props) {

  const [propertyOffers, setPropertyOffers] = useState([])
  const [showOfferModal, setOfferModal] = useState(false)

  useEffect(() => {
    getOffers(props.user.token, props.propertyDetails.id)
    .then((response) => {
      // console.log(response)
      setPropertyOffers(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [props.user.token, props.propertyDetails.id])

  const toggleOfferModalOpen = () => {
    console.log("Open")
    setOfferModal(true)
  }

  const toggleOfferModalClose = () => {
    console.log("Close")
    setOfferModal(false)
  }

  const allOffers = propertyOffers.sort((a,b) => b.offer_price - a.offer_price).map((offer, index) => {
    return (<Offer offer={offer} key={index}/>)
  })

  let accordion;
  if (propertyOffers.length !== 0) {
    accordion = (allOffers);
  } else {
      accordion =(
        <Accordion.Body>
          <p>No current offers...</p>
        </Accordion.Body>
      )
  }

  let offerButton = null
  if (!props.profile_page) {
    offerButton = <div style={{ position: 'absolute', top: '0', right: '0', padding: '0.5rem' }}>
                    <Button onClick={toggleOfferModalOpen} variant="primary" size="sm">Add Offer <i className="bi bi-plus-circle-fill ml-2"></i></Button>
                  </div>
  }




  return (
    <>
      <Container>
        <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', margin: '1rem 0' }}>
          {offerButton}
          <Card.Body className="d-flex align-items-center">
            <Card.Img
              variant="left"
              src={props.propertyDetails.img_url}
              style={{ height: '10rem', width: '12.5rem', objectFit: 'cover', marginRight: '1rem' }}
            />
            <div>
              <h5 className="mb-0">£{props.propertyDetails.asking_price.toLocaleString()}</h5>
              <p className="text-muted mb-0">{props.propertyDetails.no_rooms} rooms</p>
            </div>

            <OfferFormModal
              show={showOfferModal}
              onHide={toggleOfferModalClose}
              user={props.user}
              propertyDetails={props.propertyDetails}
            />

          </Card.Body>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Offers</Accordion.Header>
              {accordion}
            </Accordion.Item>
          </Accordion>
        </Card>
      </Container>
    </>
  );
}

export default PropertyItem;
