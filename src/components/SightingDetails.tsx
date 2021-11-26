import React from 'react';
import { Data } from '../data/schema';
import Text from './Text';

type Props = {
    data: Data
}

const SightingDetails = (props: Props) => {
    const data : Data = props.data;

    const entries = [
        {label: "Spotted on: ", text: data.timestamp.toString(), lineBreak: true},
        {label: "Animal type: ", text: data.animal},
        {label: "Location (lat, lng): ", text: `(${data.lat},${data.lng})`},
        {label: "Description: ", text: data.description}
    ]

    return (
        <form style={{margin: 10}}>
            {entries.map(
                ({label, text, lineBreak}) => 
                <Text 
                key={label}
                label={label} 
                lineBreak={lineBreak} 
                text={text}
                />
            )}
        </form>
    );
}

export default SightingDetails;
