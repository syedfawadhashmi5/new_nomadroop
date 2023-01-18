import React from 'react'
import Form from 'react-bootstrap/Form'

const inputField =(props) => {
    return(
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> {props.label} </Form.Label>
                <Form.Control name={props.name} type="text" value={props?.value} placeholder={props.placeholder}  required={props.required} onChange={props.action}/>
            </Form.Group>
        </>
    )
}

export default inputField; 