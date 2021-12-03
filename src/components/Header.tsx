import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import SightingModal from './SightingModal';

type State = {
    display: string, 
    show: Boolean
}

const showState = {display: 'block', show: true};
const hideState = {display: 'none', show: false};

export default function Header() {
    const [state, setState] = useState<State>(hideState);
    const onChange = () => setState((prev: State) => {
        if (prev.show) return hideState;
        else return showState;
    });

    return (
        <div>
            <h1 style={{marginTop: 50, marginBottom: 0, fontSize: 37.5}}>Welcome To MacWild</h1> 
            <Button 
                style={{margin: 5, height: 40}} 
                variant="danger"
                onClick={onChange}
            >
            Report A Sighting
            </Button>
            <div style={{display : state.display}}>
                <SightingModal display={state.display} show={state.show} onChange={onChange}/>
            </div>
            {/* {show == true ? <SightingModal show={show} onHide={handleShow}/> : null} */}
        </div>
        
    )
}
