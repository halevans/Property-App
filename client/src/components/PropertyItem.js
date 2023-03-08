import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap'
import React from 'react'


function PropertyItem(props) {
  return (
    <>
    <h1>PropertyItem</h1>
    <Container>
      <Card>
        <Card.Body>
          <Card.Img variant='left' style={{height: '5rem', objectFit: 'cover', display: 'inline'}} src={props.propertyDetails.img_url}/>
          <Card.Title>{props.propertyDetails.asking_price}</Card.Title>
          <Card.Text>{props.propertyDetails.no_rooms}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>

  )
}

export default PropertyItem