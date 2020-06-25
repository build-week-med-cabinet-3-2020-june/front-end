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

    const DS = axios.get('https://med-cabinet-3-erik.herokuapp.com/predictions');
    console.log(DS, "success")


    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'red', margin: '0 auto'}}>
                Headline Here
            </h2>*
        </Card>
        <Form>
        
        <FormGroup check>
            <Label check>
                    <Input type='radio' name='Sativa' value='white' onChange={handleChange}/>
                    Sativa
                </Label>
            </FormGroup>

            <FormGroup check>
            <Label check>
                    <Input type='radio' name='Indica' value='white' onChange={handleChange}/>
                    Indica
                </Label>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
        </>
    )
}

export default OrderForm