import React, { useState } from 'react';
import { Card, Form, Button } from 'reactstrap';
import { axiosWithAuth } from "../utils/axiosWithAuth";



const OrderForm = props =>{
    const [formData, setFormData] =useState({
        name:"",
        type:"",
        
    });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    // map here and card


    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'red', margin: '0 auto'}}>
                Headline Here
            </h2>*
        </Card>
        <Form onSubmit={props.handleSubmit}>
        
            <input type="text" placeholder="Search.."></input>

            <Button >Submit</Button>
        </Form>
        </>
    )
}

export default OrderForm