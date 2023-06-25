import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../assets/axios.jsx";
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


const UpdateCustomer = () => {

    const { phone } = useParams();

    const [customerInput, setCustomerInput] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        aadhaar_no: "",
        pan_No: "",
        date_Of_Birth: ""
    });

  const getCustomer = async () => {
    
    if(phone){
      try {
        const response = await axios.get(`/Customer/byUniqueIdentity/${phone}`);
        setCustomerInput(response.data);
      } catch (exe) {
        //console.log(exe);
      }
    }
  }


  useEffect(() => {
    getCustomer();
  },[]);

    const handleInputChange = (e) => {
      setCustomerInput({
        ...customerInput,
        [e.target.id]: e.target.value
      });
    }

    const putData = async (e) => {
      try {
          await axios.put('/Customer', customerInput)
          .then((response) => console.log(response)
          );
          alert('Ok');

        } catch (exe) {
            console.log(exe);
        }
        
    }

  //console.log(customerInput);

    return (
        
        <Helmet title="Customer Registration Page">
        <CommonSection title="Update Customer Information" />
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
                        <h3 className="mb-5 text-uppercase fw-bold">Phone No. : {phone}</h3>
                        
                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' classname='name' placeholder={customerInput.name} label='Name' size='lg' id='name' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='address' placeholder={customerInput.address} label='Address' size='lg' id='address' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='email' placeholder={customerInput.email} label='Email' size='lg' id='email' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='aadhaar_no' placeholder={customerInput.aadhaar_no} label='UID' size='lg' id='aadhaar_no' type='text' onChange={(e) => handleInputChange(e)}/>


                        </MDBRow>

                        <MDBRow>


                            <MDBInput wrapperClass='mb-4' className='pan_No' placeholder={customerInput.pan_No} label='Pan No' size='lg' id='pan_No' type='text' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        <MDBRow>

                            <MDBInput wrapperClass='mb-4' className='date_Of_Birth' placeholder={customerInput.date_Of_Birth} label='DOB' size='lg' id='date_Of_Birth' type='date' onChange={(e) => handleInputChange(e)}/>

                        </MDBRow>

                        
                        <div className="d-flex justify-content-end pt-3">
                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => putData(e)}>Update Details</MDBBtn>
                        </div>

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

export default UpdateCustomer;
