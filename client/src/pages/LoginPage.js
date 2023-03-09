import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import LoginForm from '../components/LoginForm'
import RegisterFormModal from '../components/RegisterFormModal'
import { useNavigate } from 'react-router-dom';


function LoginPage() {

  const navigate = useNavigate();

  const [showRegisterModal, setRegisterModal] = useState(false)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      navigate("/marketplace");
    }}, [navigate]);

  const toggleRegisterModalOpen = () => {
    setRegisterModal(true)
  }

  const toggleRegisterModalClose = () => {
    setRegisterModal(false)
  }

  return (
    <>
      <Container style={{ width: '50%', margin: '1em auto', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
        <LoginForm />
      </Container>
      <Container className="text-center m-5">
        <h4>Not Registered?</h4>
        <Button variant="secondary" onClick={toggleRegisterModalOpen}>Sign Up</Button>
      </Container>

      <RegisterFormModal
                      show={showRegisterModal}
                      onHide={toggleRegisterModalClose} />
    </>
  )
}

export default LoginPage