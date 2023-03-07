import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { registerUser } from '../ApiConfig/api';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

  const navigate = useNavigate();

  const [registerDetails, setRegisterDetails ] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registering User");

    registerUser(registerDetails)
      .then((response) => {
        console.log(response, response.data)

        // Store response data to local storage
        localStorage.setItem('user',
        JSON.stringify({
          id: response.data.resource_owner.id,
          token: response.data.token,
          refresh_token: response.data.refresh_token
        }));

        // Redirect page to landing page
        console.log("Navigating to landing-page");
        navigate("/landing-page");
      })
      .catch((error) => {
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        } else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        } else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
  }

  return (
    <>
      <h2>Register Form</h2>
      <Form onSubmit={handleRegisterSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="registerFormFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="name"
                name="first_name"
                placeholder="Enter first name" 
                onChange={handleInputChange} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="registerFormLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="name"
                name="last_name"
                placeholder="Enter last name" 
                onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="registerFormEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email" 
            onChange={handleInputChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerFormConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;