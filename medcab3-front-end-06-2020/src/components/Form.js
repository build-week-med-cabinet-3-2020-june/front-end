import React, { useState } from 'react';
import { Card, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { prependOnceListener } from '../../../../back-end/database/dbConfig';



const OrderForm = (props) =>{
    const [formData, setFormData] =useState({
        name:"",
        type:"",
        
    });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const DS = axiosWithAuth().get('https://med-cab-api.herokuapp.com/');
    console.log(DS, "success")

    // map here and card


    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'red', margin: '0 auto'}}>
                Headline Here
            </h2>*
        </Card>
        <Form>
        
            <input type="text" placeholder="Search.."></input>

            <Button onSubmit={props.handleSubmit}>Submit</Button>
        </Form>
        </>
    )
}

export default OrderForm