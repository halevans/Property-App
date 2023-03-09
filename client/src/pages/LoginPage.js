import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

function LoginPage() {
  return (
    <>
      <Container style={{ width: '50%', margin: '0 auto', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
        <LoginForm />
      </Container>
      <Container style={{ width: '50%', margin: '0 auto', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
        <RegisterForm />
      </Container>
    </>
  )
}

export default LoginPage