import React, { FormEventHandler, ReactElement, useState, SyntheticEvent } from 'react';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import {animals, Data} from '../data/schema';
import sighting from '../data/sightings.json';
import {writeNewEntry} from '../utils/db';

const SightingForm = () : ReactElement => {

    const [selectedAnimal, setAnimal] = useState<string>(animals[0]);
    const fields = ['date', 'time', 'location','picture', 'description'];


    const validateFormData = (evt : any) : Boolean => {
        for (const field of fields){
            if (evt.target[field].value == null){
                return false;
            }
        }
        return true;
    }

    const handleSubmit = (evt: React.BaseSyntheticEvent) => {
        evt.preventDefault();

        if (!validateFormData(evt)) {
            alert('Something went wrong. Please refill the data');
        }

        // continue
        const target = evt.target;
        const sighting : Data = {
            lat: 43.260995, // TODO, add geocoding from address
            lng: -79.919250,
            timestamp: new Date(target.date.value),
            description: target.date.description,
            picture: target.picture.value
        };

        writeNewEntry(sighting, (status : Boolean) => {
            alert('Status:' + status);
        });
    }

    return (
        <form style={{margin: 10}} onSubmit={handleSubmit}>

            {/* Date Spotted */}
            <Form.Group role="form" className="mb-3" controlId='date'>
                <Form.Label>Date Spotted</Form.Label>
                <Form.Control required={true} type="date" placeholder="20/11/2021" />
            </Form.Group>

            {/* Time Spotted */}
              <Form.Group className="mb-3" controlId="time">
                <Form.Label>Time Spotted</Form.Label>
                <Form.Control required={true} type="time" placeholder="20/11/2021" />
            </Form.Group>

            {/* Animal type */}
            <Form.Group className="mb-3">
                <Form.Label>Type of Animal</Form.Label>
                
         
                <DropdownButton
                    variant="outline-danger"
                    title={selectedAnimal}
                    id="input-group-dropdown-1"
                    >
                    {animals.map(animal =>
                        <Dropdown.Item 
                        key={animal}
                        onClick={() => setAnimal(animal)}>
                        {animal}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
        
            </Form.Group>

            {/* Location */}
            <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location Spotted</Form.Label>
                <Form.Control required={true} type="text" placeholder="e.g JHE" />
            </Form.Group>

            
            {/* Description */}
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description/Notes</Form.Label>
                <Form.Control required={true} type="text" placeholder="e.g Small sized Deer near sidewalk of JHE" />
            </Form.Group>

            {/* Optional Photo */}
            <Form.Group className="mb-3" controlId="picture">
                <Form.Label>Upload Picture (Optional)</Form.Label>
                <Form.Control name="picture" type="file" size="sm" />
            </Form.Group>

            <Button variant="danger" type="submit">
                Submit
            </Button>

        </form>
    );
}

export default SightingForm;
