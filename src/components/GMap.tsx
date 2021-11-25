import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {getAllData} from '../utils/db';
import {Data} from '../data/schema';

export default function GMap() {
    const mcmaster = {lat:43.260995,lng:-79.919250};
    const zoom = 17;
    const key = {key: 'AIzaSyDaRNhgwE9rdEd8flqgUW9JiBWQ0M3F7XQ'}
    const style = {
      marginLeft: '10%',
      marginRight: '10%',
      width: '80%', 
      height: '100vh'
    };
    const sightings : Array<Data> = getAllData();

    return (
        <div>
          <GoogleMapReact
          bootstrapURLKeys={key}
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
          <Marker lat={data.lat} lng={data.lng} key={data.timestamp} data={data}/>
        )}
        </GoogleMapReact>
      </div>
    )
}
