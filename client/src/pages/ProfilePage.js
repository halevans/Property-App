import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { checkTokenValidity } from '../ApiConfig/api';

function ProfilePage() {

  const navigate = useNavigate();

  const [authenticatedUser, setAuthenticated] = useState(null);

  const [profileDetails, setProfileDetails] = useState({
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    phone_number: '555-555-5555'
  });

  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      checkTokenValidity(storedUser.token)
      .then((response) => {
        setAuthenticated(storedUser);
      })
      .catch((error) => {
        localStorage.removeItem("user");
        navigate("/login");
      })}
    else {
      navigate("/login");
    }
  }, [navigate]);

  const handleProfileDetailsChange = (e) => {
    const { id, value } = e.target;
    setProfileDetails({ ...profileDetails, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    setSuccessMessage('Profile updated successfully!');
  };


  if (!authenticatedUser) {
    return null
  } else {
    return (
      <>
        <h1>Profile Page</h1>
        <Container>
          <Card>
            <Card.Body>
              {editMode ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={profileDetails.first_name}
                      onChange={handleProfileDetailsChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={profileDetails.last_name}
                      onChange={handleProfileDetailsChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={profileDetails.email}
                      onChange={handleProfileDetailsChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={profileDetails.phone_number}
                      onChange={handleProfileDetailsChange}
                    />
                  </Form.Group>
                  <Button type="submit">Save Changes</Button>
                </Form>
              ) : (
                <>
                  <Card.Title>{profileDetails.first_name} {profileDetails.last_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{profileDetails.email}</Card.Subtitle>
                  <Card.Text>{profileDetails.phone_number}</Card.Text>
                  <Button variant="primary" onClick={() => setEditMode(true)}>Edit Profile</Button>
                </>
              )}
              {successMessage && (
                <div className="mt-3 alert alert-success">{successMessage}</div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default ProfilePage