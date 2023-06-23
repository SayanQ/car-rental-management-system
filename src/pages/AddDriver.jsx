import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import "../styles/customer-details.css";

const AddDriver = () => {
    const [DriverInput, setDriverInput] = useState({
      name: "",
      address: "",
      phone: "",
      email: "",
      adhaar_no: "",
      pan_No: "",
      date_Of_Birth: "",
      driving_Licence_No:"",
      driving_Licence_Valid_Till:"",
      km_Driven:0,
      charges_Per_Hour:0
    });
    
    const handleInputChange = (e) => {
      setDriverInput({
        ...DriverInput,
        [e.target.className]: e.target.value
      });
    }

    const postData = async (e) => {
        await axios.post('/Driver', DriverInput)
            .then((response) => console.log(response),alert('Ok')
            ).catch((e) => console.log(e));        
    }

  console.log(DriverInput);

    return (
        <div>
        <CommonSection title="Driver Registration Page" />
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
                    <input placeholder='Aadhar No.' className = 'adhaar_no' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pan</label>
                    <input placeholder='Pan No.' className = 'pan_No' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>DOB</label>
                    <input type='date' className = 'date_Of_Birth' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Driving Licence</label>
                    <input placeholder='driving_Licence_No' className = 'driving_Licence_No' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Valid Till</label>
                    <input type='date' className = 'driving_Licence_Valid_Till' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>km Driven</label>
                    <input type="number" placeholder='km_Driven' className = 'km_Driven' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Charges / Hour</label>
                    <input type="number" placeholder='charges_Per_Hour' className = 'charges_Per_Hour' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button onClick={(e) => postData(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    ) 
};

export default AddDriver;

