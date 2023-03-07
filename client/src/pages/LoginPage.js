import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

function LoginPage() {
  return (
    <>
      <Container>
        <Container>
          <LoginForm />
        </Container>
        <Container>
          <RegisterForm />
        </Container>
      </Container>
    </>
  )
}

export default LoginPage