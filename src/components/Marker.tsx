import React from 'react';
import {GeoAltFill} from 'react-bootstrap-icons';
import {Data} from '../data/schema';

type MarkerProps = {
    data: Data
};

const Marker = (props : any) => {
    /*
     Render anything you like for the marker component
    */
   const handleClick = () => {
       console.log(props);
       alert('data: ' + props.data.description);

   }

    return (
        <div style={{fontSize: 35, color: 'red'}} onClick={handleClick}>
           <GeoAltFill></GeoAltFill>
        </div>
     );
}

export default Marker;
