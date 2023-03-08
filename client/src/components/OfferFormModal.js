import React from 'react'
import { Button, Modal } from "react-bootstrap";

function OfferFormModal(props) {
  return (
      <Modal
          backdrop="static"
          // {...this.props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>Title</p>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <p>Body</p>
      </Modal.Body>
          <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
      </Modal>
  );
}

export default OfferFormModal;