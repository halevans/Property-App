import React, { useState} from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';


function UserDetails(props) {

  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleProfileDetailsChange = (e) => {
    const { name, value } = e.target;
    props.setProfileDetails({ ...props.profileDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    setSuccessMessage('Profile updated successfully!');
  };
  return (
    <Container>
    <Card>
      <Card.Body>
        {editMode ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={props.profileDetails.first_name}
                onChange={handleProfileDetailsChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={props.profileDetails.last_name}
                onChange={handleProfileDetailsChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={props.profileDetails.email}
                onChange={handleProfileDetailsChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                value={props.profileDetails.phone_number}
                onChange={handleProfileDetailsChange}
              />
            </Form.Group>
            <Button type="submit">Save Changes</Button>
          </Form>
        ) : (
          <>
            <Card.Title>{props.profileDetails.first_name} {props.profileDetails.last_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.profileDetails.email}</Card.Subtitle>
            <Card.Text>{props.profileDetails.phone_number}</Card.Text>
            <Button variant="primary" onClick={() => setEditMode(true)}>Edit Profile</Button>
          </>
        )}
        {successMessage && (
          <div className="mt-3 alert alert-success">{successMessage}</div>
        )}
      </Card.Body>
    </Card>
  </Container>
  )
}

export default UserDetails