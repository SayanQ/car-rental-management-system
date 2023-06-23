import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import "../styles/customer-details.css";

const AddCustomer = () => {
    const [customerInput, setCustomerInput] = useState({
      name: "",
      address: "",
      phone: "",
      email: "",
      aadhaar_no: "",
      pan_No: "",
      date_Of_Birth: ""
    });
    
    const handleInputChange = (e) => {
      setCustomerInput({
        ...customerInput,
        [e.target.className]: e.target.value
      });
    }

    const postData = async (e) => {
        await axios.post('/Customer', customerInput)
            .then((response) => console.log(response),alert('Ok')
            ).catch((e) => console.log(e));        
    }

  console.log(customerInput);

    return (
        <div>
            <CommonSection title="Customer Registration Page" />
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' className = 'name' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' className = 'address' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone No.' className = 'phone' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email ID' className = 'email' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>UID</label>
                    <input placeholder='Aadhar No.' className = 'aadhaar_no' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pan</label>
                    <input placeholder='Pan No.' className = 'pan_No' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>DOB</label>
                    <input type='date' placeholder='Date Of Birth' className = 'date_Of_Birth' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button onClick={(e) => postData(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    ) 
};

export default AddCustomer;

