import React, { ReactElement } from 'react';
import {Form, Button} from 'react-bootstrap';

const SightingForm = () : ReactElement => {
    return (
        <Form style={{margin: 10}}>

            {/* Date Spotted */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Spotted</Form.Label>
                <Form.Control type="date" placeholder="20/11/2021" />
            </Form.Group>

            {/* Time Spotted */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Spotted</Form.Label>
                <Form.Control type="time" placeholder="20/11/2021" />
            </Form.Group>

            {/* Animal type */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type of Animal</Form.Label>
                <Form.Control type="password" placeholder="e.g Deer" />
            </Form.Group>

            {/* Location */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Location Spotted</Form.Label>
                <Form.Control type="password" placeholder="e.g JHE" />
            </Form.Group>

            {/* Optional Photo */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" size="sm" />
            </Form.Group>

            <Button variant="danger" type="submit">
                Submit
            </Button>

        </Form>
    );
}

export default SightingForm;
