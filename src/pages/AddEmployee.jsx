import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "../assets/axios.jsx";
import "../styles/customer-details.css";

const AddEmployee = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    const [employeeInput, setEmployeeInput] = useState({
      name: "",
      address: "",
      phone: "",
      email: "",
      aadhaar_no: "",
      pan_No: "",
      date_Of_Birth: "",
      hire_Date: "",
      job_Title: "",
      department: "",
      employee_Status: isChecked,
      annual_CTC: 0
    });

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
    
    const handleInputChange = (e) => {
      setEmployeeInput({
        ...employeeInput,
        [e.target.className]: e.target.value
      });
    }

    const postData = async (e) => {
        await axios.post('/Employee', employeeInput)
            .then((response) => console.log(response),alert('Ok')
            ).catch((e) => console.log(e));        
    }

  console.log(employeeInput);

    return (
        <div>
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
                    <input placeholder='Aaadhaar No.' className = 'aadhaar_no' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pan</label>
                    <input placeholder='Pan No.' className = 'pan_No' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>DOB</label>
                    <input type='date' placeholder='Date Of Birth' className = 'date_Of_Birth' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Hired On</label>
                    <input type='date' placeholder='hire_Date' className = 'hire_Date' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Job Title</label>
                    <input placeholder='job_Title' className = 'job_Title' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Department</label>
                    <input placeholder='department' className = 'department' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Employee Status</label>
                    <input type="checkbox" checked={isChecked} className = 'employee_Status' onChange={(e) => handleCheckboxChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Annual CTC</label>
                    <input type='number' placeholder='annual_CTC' className = 'annual_CTC' onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button onClick={(e) => postData(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    ) 
};

export default AddEmployee;

