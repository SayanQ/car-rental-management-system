import React, { useState, useEffect } from "react";
import axios from "../assets/axios.jsx";
//import axios from "axios";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,  
}
from 'mdb-react-ui-kit';


const AddDriver = () => {

    const [driverInput, setDriverInput] = useState({
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

    
/*
    const postData = async (e) => {

        await axios.post('https://localhost:7192/api/Driver', driverInput)
          .then((response) => console.log(response),
          alert('Ok'))
          .catch((e) => console.log(e));
                 
    }
*/
            
    

    const handleInputChange = (e) => {
        setDriverInput({
          ...driverInput,
          [e.target.id]: e.target.value
        });
      }

    const postData = async (e) => {
        try {
            await axios.post('/Driver', driverInput)
            .then((response) => console.log(response)
            );
            alert('Ok');
  
          } catch (exe) {
              console.log(exe);
          }   
      }

  console.log(driverInput);

    return (
        
        <Helmet title="Customer Registration Page">
        <CommonSection title="Driver Registration Page" />
            <MDBContainer fluid className='w-75' style={{ margin: '100px auto' }} >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol>

                <MDBCard className='my-4'>

                <MDBRow className='g-0'>

                    <MDBCol md='6' className="d-none d-md-block">
                    <MDBCardImage src='https://images.pexels.com/photos/4391483/pexels-photo-4391483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Sample photo" className="rounded-start" fluid/>
                    </MDBCol>

                    <MDBCol md='6'>

                    <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>
                        <h3 className="mb-5 text-uppercase fw-bold">Welcome to our Car Rental Services! Please complete the following form to 
                        register as a driver.</h3>
                        
                        <MDBRow>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' classname='name' placeholder={driverInput.name} label='Name' size='lg' id='name' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='date_Of_Birth' label='DOB' size='lg' id='date_Of_Birth' type='date' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>
    
                        <MDBRow>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-2' className='address' placeholder={driverInput.address} label='Address' size='lg' id='address' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>                            

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='email' placeholder={driverInput.email} label='Email' size='lg' id='email' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>
                                         
                        <MDBRow>

                            <MDBCol md='6'>
                              <MDBInput wrapperClass='mb-4' className='adhaar_no' placeholder={driverInput.adhaar_no} label='UID' size='lg' id='adhaar_no' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='pan_No' placeholder={driverInput.pan_No} label='Pan No' size='lg' id='pan_No' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>

                        <MDBRow>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='driving_Licence_No' placeholder={driverInput.driving_Licence_No} label='Driving Licence' size='lg' id='driving_Licence_No' onChange={(e) => handleInputChange(e)}/>


                            </MDBCol>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='driving_Licence_Valid_Till' label='Expiry Date' size='lg' id='driving_Licence_Valid_Till' type='date' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>
                      
                        <MDBRow>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='km_Driven' placeholder={driverInput.km_Driven} label='Experience (Km Driven)' size='lg' id='km_Driven' type='number' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='charges_Per_Hour' placeholder={driverInput.charges_Per_Hour} label='Charges / Hour' size='lg' id='charges_Per_Hour' type='number' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>

                        <MDBRow>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='phone' placeholder={driverInput.phone} label='Phone No' size='lg' id='phone' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBCol>

                        <MDBCol>
                        
                        <MDBBtn className='ms-2' color='warning' size='lg' type='submit' onClick={(e) => postData(e)}>Submit Details</MDBBtn>
                        </MDBCol>

                        </MDBRow>

                    </MDBCardBody>

                    </MDBCol>
                </MDBRow>

                </MDBCard>

            </MDBCol>
            </MDBRow>

            </MDBContainer>
            
        </Helmet>

    ); 
}

export default AddDriver;

/*
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

*/