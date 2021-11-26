import React, {useState, useEffect, useRef} from 'react';
import {Button, Modal, Form, DropdownButton, Dropdown} from 'react-bootstrap';
import SightingForm from './SightingForm';
import {handleSubmit} from '../utils/form';
import {animals, Data} from '../data/schema';
import Store from './Store';

type SightingModalProps = {
  show: Boolean,
  onChange: Function,
  display: string
}

const SightingModal = (props: SightingModalProps) => {
    const [selectedAnimal, setAnimal] = useState<string>(animals[0]);
    const [formState, setFormState] = useState<Data>({
      lat: 43.260995,
      lng: -79.919250,
      timestamp: new Date(),
      description: "",
      picture: "",
      animal: selectedAnimal
    });
    const [formRef] = useState<React.RefObject<HTMLFormElement>>(React.createRef<HTMLFormElement>());

    const handleFormStateChange = (e : any) => {
      const target = e.target;
      const field = target.name;
      setFormState((prevFormState: Data) => ({...prevFormState, [field]: field === 'timestamp' ? new Date(target.value) : target.value}));
    }

    const handleMapSelection = () => {
      props.onChange();
      Store.subscribe((lat: number, lng: number) => {
        props.onChange();
        setFormState((prevFormState : Data) => ({...prevFormState, lat, lng}))
      })

    }

    return (
        <Modal show={props.show} onHide={() => {
          props.onChange();
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Report a Deer Sighting</Modal.Title>
          </Modal.Header>
          
          <form ref={formRef} style={{margin: 10, display: props.display}} onSubmit={handleSubmit(selectedAnimal)}>

                {/* Date Spotted */}
                <Form.Group className="mb-3" controlId='date'>
                    <Form.Label>Date Spotted</Form.Label>
                    <Form.Control 
                    required={true} 
                    type="date" 
                    placeholder="20/11/2021" 
                    value={formState.timestamp.toISOString().split("T")[0]}
                    // TODO: debounce this 
                    name="timestamp"
                    onChange={(e : any) => handleFormStateChange(e)} 
                  />
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
                    <Button
                      variant="danger" 
                      style={{margin: 5, fontSize: 15}}
                      onClick={handleMapSelection}
                      >
                      Select on map 
                    </Button>

                    <Form.Control required={true} type="text" value={`(${formState.lat}, ${formState.lng})`} />
                </Form.Group>


                {/* Description */}
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description/Notes</Form.Label>
                    <Form.Control 
                    onChange={(e : any) => handleFormStateChange(e)} 
                    name="description" 
                    required={true} 
                    type="text"
                    placeholder="E.g Small sized skunk near JHE"
                    value={formState.description}
                    />
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
        </Modal>
    );
  }

export default SightingModal;
