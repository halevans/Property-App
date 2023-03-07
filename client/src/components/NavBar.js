import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { logoutUser } from '../ApiConfig/api';

function NavBar() {
  const handleLogOut = () => {
    console.log("Goodbye!")
    const user_token = JSON.parse(localStorage.getItem("user")).token

    console.log(user_token)
    logoutUser(user_token)
      .then((response) => {
        console.log(response)
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Property App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/landing-page">Landing Page</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleLogOut}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;