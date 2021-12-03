import React from 'react';
import {Form} from 'react-bootstrap';

type TextComponentProps = {
    text: string,
    label: string,
    lineBreak?: Boolean
};

function Text({text, label, lineBreak}: TextComponentProps){
    return (
        <div style={{fontSize: 20}}>
            <Form.Label>{label}</Form.Label>
            {lineBreak != null && lineBreak === true ? <br/> : null}
            <strong>{text}</strong>
        </div>
    )
}

export default Text;