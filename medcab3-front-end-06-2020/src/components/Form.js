import React, { useState } from 'react';
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button } from 'reactstrap';
import axios from 'axios';
// import * as yup from 'yup';


const OrderForm = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState)
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