import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {getAllData} from '../utils/db';
import {Data} from '../data/schema';
import Store from './Store';

const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;
const key = {key: `${REACT_APP_GOOGLE_MAPS_KEY}`}

export default function GMap() {
  
    const mcmaster = {lat:43.260995,lng:-79.919250};
    const zoom = 17;
    const style = {
      marginLeft: '10%',
      marginRight: '10%',
      width: '80%', 
      height: '100vh'
    };

    // lazy initialization of state, will only be set on first render
    const [sightings] = useState<Array<Data>>(() => getAllData());
    
    return (
        <div>
          <GoogleMapReact
          bootstrapURLKeys={key}
          onClick={(evt : any) => {
            const lat = evt.lat;
            const lng = evt.lng;
            Store.set(lat, lng);
          }}
          style={style}
          resetBoundsOnResize={true}
          defaultCenter={mcmaster}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => { console.log (map, maps.Geocoder)}}
        > 
        {sightings.map((data: Data) => 
           /**
            * The props lat, lng are required as GoogleMapReact wraps the Marker
            */
          <Marker lat={data.lat} lng={data.lng} key={data.lat} data={data}/>
        )}
        </GoogleMapReact>
      </div>
    )
}
