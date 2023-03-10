import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import LoginForm from '../components/LoginForm';
import RegisterFormModal from '../components/RegisterFormModal';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

  const navigate = useNavigate();

  const [showRegisterModal, setRegisterModal] = useState(false);

  // If the user is already logged in and exists in localStorage, redirect them to the marketplace page
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      navigate("/marketplace");
    }}, [navigate]);

  const toggleRegisterModalOpen = () => {
    setRegisterModal(true);
  }

  const toggleRegisterModalClose = () => {
    setRegisterModal(false);
  }

  return (
    <>
      <Container style={{ width: '50%', margin: '1em auto', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
        <LoginForm />
      </Container>
      <Container style={{ width: '50%', margin: '1em auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <i className="fa-solid fa-house-chimney fa-2x"></i>
          <h4>Not Registered?</h4>
          <Button variant="secondary" onClick={toggleRegisterModalOpen}>Sign Up</Button>
        </div>
      </Container>

      <RegisterFormModal
                      show={showRegisterModal}
                      onHide={toggleRegisterModalClose} />
    </>
  )
}

export default LoginPage;