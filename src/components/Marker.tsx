import React from 'react';

type MarkerProps = {
    text: string,
    lat: number,
    lng: number
};

const Marker = (props : MarkerProps) => {
    /*
     Render anything you like for the marker component
    */
    return (
        <div>
           {props.text}
        </div>
     );
}

export default Marker;
