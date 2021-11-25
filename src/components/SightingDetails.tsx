import React from 'react';
import { Data } from '../data/schema';
import {Form, Button} from 'react-bootstrap';

type Props = {
    data: Data
}

const SightingDetails = (props: Props) => {
    const data : Data = props.data;
    console.log(data.timestamp);
    const time = data.timestamp;

    return (
        <form style={{margin: 10}}>
            <Form.Label>Date Spotted: {data.timestamp}</Form.Label>
            <Form.Label>Time Spotted: {time}</Form.Label>
            <Form.Label>Animal Type: {data.animal}</Form.Label>
            <Form.Label>Location: ({data.lat}),({data.lng})</Form.Label>
            <Form.Label>Description: {data.description}</Form.Label>
        </form>
    );
}

export default SightingDetails;
