import React, { useState } from "react";
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/addCar.css";
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

const AddCar = () => {
    const [carInput, setCarInput] = useState({
        car_No: "",
        model: "",
        company: "",
        type: "",
        colour: "",
        year_Of_Manufacturing: "",
        km_Driven: "",
        sitting_Capacity: "",
        boot_space: "",
        charges_Per_Hour: ""
    });
    
    const handleInputChange = (e) => {
      setCarInput({
        ...carInput,
        [e.target.id]: e.target.value
      });
    }

    const postData = async (e) => {
        try {
            await axios.post('/Car', carInput)
            .then((response) => console.log(response)
            );
            alert('Ok');

          } catch (exe) {
            // console.log(exe);
          }
        
    }

  console.log(carInput);
  return (
        
    <Helmet title="Car Registration Page">
    <CommonSection title="Add New Car" />
        <MDBContainer fluid className=' w-75' style={{ margin: '100px auto' }} >

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

            <MDBCard className='my-4'>

            <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80' alt="Sample photo" className="rounded-start" fluid/>
                </MDBCol>

                <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>
                    <MDBCol md='11'>
                        <MDBInput wrapperClass='mb-4' className='car_No' placeholder="AB12CD3456" label='Car No*' size='lg' id='car_No' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' classname='company' placeholder="ABCD" label='Comapny' size='lg' id='company' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='model' placeholder="ABCD" label='Model' size='lg' id='model' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    </MDBRow>

                    <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='type' placeholder="ABC" label='Type' size='lg' id='type' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='colour'  label='Colour' size='lg' id='colour' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    </MDBRow>

                    <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='year_Of_Manufacturing' placeholder="1234" label='Year Of Manufacturing' size='lg' id='year_Of_Manufacturing' type='text' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='km_Driven' placeholder="12345678" label='km Driven' size='lg' id='km_Driven' type='number' onChange={(e) => handleInputChange(e)}/>
                    </MDBCol>

                    </MDBRow>

                    <MDBRow>

                    <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' className='sitting_Capacity' placeholder="1" label='Sitting Capacity' size='lg' id='sitting_Capacity' type='number' onChange={(e) => handleInputChange(e)}/>

                    </MDBCol>

                    <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' className='boot_space' placeholder="123" label='Boot space' size='lg' id='boot_space' type='number' onChange={(e) => handleInputChange(e)}/>

                    </MDBCol>

                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' className='charges_Per_Hour' placeholder="1234" label='Charges Per Hour' size='lg' id='charges_Per_Hour' type='number' onChange={(e) => handleInputChange(e)}/>

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

); 
}

export default AddCar;

