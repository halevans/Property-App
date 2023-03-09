import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { newProperty } from '../ApiConfig/api';
import RegisterForm from './RegisterForm';

function RegisterFormModal(props) {

  return (
    <Modal
      backdrop="static"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>Register</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <RegisterForm/>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterFormModal;