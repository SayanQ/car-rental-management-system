import React, { useState } from "react";
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/customer-details.css";
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
        [e.target.id]: e.target.value
      });
    }

    const postData = async (e) => {
        await axios.post('/Customer', customerInput)
            .then((response) => console.log(response),alert('Ok')
            ).catch((e) => console.log(e));        
    }

  console.log(customerInput);

    return (
        <Helmet title="Customer Registration Page">
        <CommonSection title="Add New Customer" />
            <MDBContainer fluid className='w-75' style={{ margin: '100px auto' }} >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol>

                <MDBCard className='my-4'>

                <MDBRow className='g-0'>

                    <MDBCol md='6' className="d-none d-md-block">
                    <MDBCardImage src='https://images.pexels.com/photos/2050244/pexels-photo-2050244.jpeg?auto=compress&cs=tinysrgb&w=1600' alt="Sample photo" className="rounded-start" fluid/>
                    </MDBCol>

                    <MDBCol md='6'>

                    <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>
                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' classname='name' placeholder="ABCD" label='Name' size='lg' id='name' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>
                        
                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' classname='phone' placeholder="0123456789" label='Phone' size='lg' id='phone' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='address' placeholder="ABCDEFGHIJ" label='Address' size='lg' id='address' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='email' placeholder="someone@example.com" label='Email' size='lg' id='email' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='aadhaar_no' placeholder="1234-5678-9123" label='UID' size='lg' id='aadhaar_no' type='text' onChange={(e) => handleInputChange(e)}/>


                        </MDBRow>

                        <MDBRow>


                            <MDBInput wrapperClass='mb-4' className='pan_No' placeholder="ABCDE-1234-F" label='Pan No' size='lg' id='pan_No' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='date_Of_Birth' label='DOB' size='lg' id='date_Of_Birth' type='date' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        
                        <div className="d-flex justify-content-end pt-3">
                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => postData(e)}>Submit</MDBBtn>
                        </div>

                    </MDBCardBody>

                    </MDBCol>
                </MDBRow>

                </MDBCard>

            </MDBCol>
            </MDBRow>

            </MDBContainer>
            
        </Helmet>
    ) 
};

export default AddCustomer;

