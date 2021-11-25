import React, {useState} from 'react';
import {GeoAltFill} from 'react-bootstrap-icons';
import {Data} from '../data/schema';
import SightingDetailsModal from './SightingDetailsModal';

type MarkerProps = {
    data: Data
    lat: Number,
    lng: Number
};

const Marker = (props : MarkerProps) => {
    const [showModal, setShow] = useState<Boolean>(false);

    const handleClick = () => setShow((prev : Boolean) => !prev );
    
    return (
        <div>
            <div onClick={handleClick}>
            <GeoAltFill fontSize={35} color={'red'}/>
            </div>
            {showModal == true ? <SightingDetailsModal show={showModal} data={props.data}></SightingDetailsModal> : null}
        </div>
    );
}

export default Marker;
