import React, {useState} from 'react';
import {Button, Modal, Form, DropdownButton, Dropdown} from 'react-bootstrap';
import {handleSubmit} from '../utils/form';
import {animals, Data} from '../data/schema';
import Store from './Store';
import {CheckCircle, XCircleFill} from 'react-bootstrap-icons';

type SightingModalProps = {
  show: Boolean,
  onChange: Function,
  display: string
}

enum Status{
  SUCCESS,
  FAIL,
  HIDDEN
}

const SightingModal = (props: SightingModalProps) => {
    const [selectedAnimal, setAnimal] = useState<string>(animals[0]);
    const [status, setStatus] = useState<Status>(Status.HIDDEN);
    const [formState, setFormState] = useState<Data>({
      lat: 43.260995,
      lng: -79.919250,
      timestamp: new Date(),
      description: "",
      picture: "",
      animal: selectedAnimal
    });

    const handleFormStateChange = (e : any) => {
      const target = e.target;
      const field = target.name;
      setFormState((prevFormState: Data) => {
        let value = target.value
        if (field === 'timestamp'){
          value = new Date(target.value);
        }
        const newState = {...prevFormState, [field]: value};
        return newState;
      });
    }

    const handleMapSelection = () => {
      props.onChange();      
      // this happens on each click, ideally should happen once, maybe place in a useEffect
      Store.subscribe((lat: number, lng: number) => {
        props.onChange();
        setFormState((prevFormState : Data) => ({...prevFormState, lat, lng}))
      });
    }

    const onSubmit = (evt: React.BaseSyntheticEvent) => {
      const status : Boolean = handleSubmit(formState, evt);
      if (status == true){
        // show success icon
        setStatus(Status.SUCCESS);
        setTimeout(() => window.location.reload(), 2000)
      }
      else{
        // show failed icon
        setStatus(Status.FAIL);
      }
    }

    const renderIcon = () => {
      if (status === Status.HIDDEN){
        return null;
      }
      else if (status === Status.SUCCESS){
        return (
          <div>
              <CheckCircle color='green' fontSize={50} style={{margin: '10px'}}/>
              <p style={{margin: 10}}><strong>Successfully saved. Refreshing the page..</strong></p>
          </div>
        ); 
      }
      return ( 
        <div>
          <XCircleFill color='red' fontSize={50} style={{margin: '10px'}}/>
          <p style={{margin: 10}}><strong>Failed to save..Please try again</strong></p>
        </div>
      );
    }

    return (
        <Modal show={props.show} onHide={props.onChange}>
          <Modal.Header closeButton>
            <Modal.Title>Report a Deer Sighting</Modal.Title>
          </Modal.Header>
          
          <form style={{margin: 10, display: props.display}} onSubmit={onSubmit}>

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
                    <Form.Control 
                    required={true} 
                    type="time" 
                    placeholder="20/11/2021" 
                    // value={formState.timestamp.toISOString().split("T")[1].split(".")[0]}
                    // onChange={(e : any) => handleFormStateChange(e)} 
                    />
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
            {renderIcon()}
        </Modal>
    );
  }

export default SightingModal;
