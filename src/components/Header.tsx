import React from 'react'
import Button from 'react-bootstrap/Button';
import SightingModal from './SightingModal';

export default function Header() {
    return (
        <div>
            <h1 style={{marginTop: 50}}>
            Welcome To Mac Deer Sighting
            </h1> 
            <SightingModal/>
        </div>
        
    )
}
