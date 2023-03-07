import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
  const [registerDetails, setRegisterDetails ] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING");
    console.log(registerDetails);
  }

  return (
    <>
      <h2>Register Form</h2>
      <Form onSubmit={handleSubmit}>
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
          <Form.Label>Confirm Password</Form.Label>
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