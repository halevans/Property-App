import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../ApiConfig/api';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();

  const [loginDetails, setLoginDetails ] = useState({
    email: null,
    password: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginUser(loginDetails)
      .then((response) => {

        // Store response data to local storage
        localStorage.setItem('user',
        JSON.stringify({
          id: response.data.resource_owner.id,
          token: response.data.token,
          refresh_token: response.data.refresh_token
        }));

        // Redirect page to landing page
        console.log("Navigating to landing page");
        navigate("/landing-page");
        // TODO change below to prop drill to App and back down to NavBar
        window.location.reload(false); // to refresh the NavBar
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
      <h4>Login</h4>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="LoginFormEmail">
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

        <Form.Group className="mb-3" controlId="LoginFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange} />
        </Form.Group>
        <Button className="my-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;