import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import SightingDetails from './SightingDetails';
import {Data} from '../data/schema';

type Props = {
    show: Boolean,
    data: Data
}

export default function SightingDetailsModal(props: Props) {
    const [show, setShow] = useState<Boolean>(props.show);
  
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sighting Details</Modal.Title>
        </Modal.Header>
        
        <SightingDetails data={props.data}/>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    )
}
