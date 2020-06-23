import React, { useState } from 'react';
import { Card, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';



const OrderForm = () =>{
    const [formData, setFormData] =useState({
        name:"",
        type:"",
        
    });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // const submit = () => {
    //     schema.validate(formData).then( () =>{
    //         axios.post('', formData).then((res) =>{
    //             console.log(res.data, 'This is posted data')
    //         })
    //     })
    // }


    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'red', margin: '0 auto'}}>
                Choose Your Option
            </h2>*
        </Card>
        <Form>
        
        <FormGroup check>
            <Label check>
                    <Input type='radio' name='Sativa' id='Sativa' onChange={handleChange}/>
                    Sativa
                </Label>
            </FormGroup>

            <FormGroup check>
            <Label check>
                    <Input type='radio' name='Indica' id='Indica' onChange={handleChange}/>
                    Indica
                </Label>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
        </>
    )
}

export default OrderForm