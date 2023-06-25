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


const UpdateDriver = () => {

    const { phone } = useParams();

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


    const getDriver = async () => {

      if(phone){
        try {
          const response = await axios.get(`/Driver/byUniqueIdentity/${phone}`);
          setDriverInput(response.data);
        } catch (exe) {
          console.log(exe);
        }
      }
    }

  useEffect(() => {
    getDriver();
  },[]);

    const handleInputChange = (e) => {
      setDriverInput({
        ...driverInput,
        [e.target.id]: e.target.value
      });
    }

    const putData = async (e) => {
      try {
          await axios.put('/Driver', driverInput)
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
        <CommonSection title="Update Driver Information" />
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
                        <h3 className="mb-5 text-uppercase fw-bold">Phone No. : {phone}</h3>

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
                            <MDBInput wrapperClass='mb-4' className='address' placeholder={driverInput.address} label='Address' size='lg' id='address' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='email' placeholder={driverInput.email} label='Email' size='lg' id='email' type='text' onChange={(e) => handleInputChange(e)}/>

                            </MDBCol>

                        </MDBRow>
                        
                        <MDBRow>


                        </MDBRow>

                        <MDBRow>


                        </MDBRow>

                        <MDBRow>


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

export default UpdateDriver;
