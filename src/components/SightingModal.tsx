import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const SightingModal = () => {
    const [show, setShow] = useState<Boolean>(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
   
        <Button 
            style={{margin: 5}} 
            variant="danger"
            onClick={handleShow}
            >
            Report A Sighting
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Report a Deer Sighting</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default SightingModal;
