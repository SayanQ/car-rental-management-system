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


const AddCar = () => {

    const { car_No } = useParams();

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

  const getCar = async () => {
    
    if(car_No){
      try {
        const response = await axios.get(`/Car/${car_No}`);
        setCarInput(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }

  useEffect(() => {
    getCar();
  },[]);

    const handleInputChange = (e) => {
      setCarInput({
        ...carInput,
        [e.target.id]: e.target.value
      });
    }

    const putData = async (e) => {
        try {
            await axios.put('/Car', carInput)
            .then((response) => console.log(response)
            );
            alert('Ok');

          } catch (exe) {
             console.log(exe);
          }
        
    }

  console.log(carInput);

    return (
        
        <Helmet title="Car Registration Page">
        <CommonSection title="Update Car Information" />
            <MDBContainer fluid className='bg-dark w-75' style={{ margin: '100px auto' }} >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol>

                <MDBCard className='my-4'>

                <MDBRow className='g-0'>

                    <MDBCol md='6' className="d-none d-md-block">
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
                    </MDBCol>

                    <MDBCol md='6'>

                    <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>
                        <h3 className="mb-5 text-uppercase fw-bold">Car No. : </h3>
                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='car_No' placeholder={carInput.car_No} label='car_No' size='lg' id='car_No' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        <MDBRow>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' classname='company' placeholder={carInput.company} label='Comapny' size='lg' id='company' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='model' placeholder={carInput.model} label='Model' size='lg' id='model' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        </MDBRow>

                        <MDBRow>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='type' placeholder={carInput.type} label='Type' size='lg' id='type' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='colour'  label='Colour' size='lg' id='colour' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        </MDBRow>

                        <MDBRow>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='year_Of_Manufacturing' placeholder={carInput.year_Of_Manufacturing} label='Year Of Manufacturing' size='lg' id='year_Of_Manufacturing' type='text' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='km_Driven' placeholder={carInput.km_Driven} label='km Driven' size='lg' id='km_Driven' type='number' onChange={(e) => handleInputChange(e)}/>
                        </MDBCol>

                        </MDBRow>

                        <MDBRow>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='sitting_Capacity' placeholder={carInput.sitting_Capacity} label='Sitting Capacity' size='lg' id='sitting_Capacity' type='number' onChange={(e) => handleInputChange(e)}/>

                        </MDBCol>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='boot_space' placeholder={carInput.boot_space} label='Boot space' size='lg' id='boot_space' type='number' onChange={(e) => handleInputChange(e)}/>

                        </MDBCol>

                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' className='charges_Per_Hour' placeholder={carInput.charges_Per_Hour} label='Charges Per Hour' size='lg' id='charges_Per_Hour' type='number' onChange={(e) => handleInputChange(e)}/>

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

export default AddCar;
