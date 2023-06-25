import React, { useState } from "react";
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
//import "../styles/customer-details.css";
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
      employee_Status: true,
      annual_CTC: 0
    });

 
    const handleInputChange = (e) => {
      setEmployeeInput({
        ...employeeInput,
        [e.target.id]: e.target.value
      });
    }

    

    const postData = async (e) => {
        try {
            await axios.post('/Employee', employeeInput)
            .then((response) => console.log(response)
            );
            alert('Ok');
  
          } catch (exe) {
              console.log(exe);
          }
        
    }

  //console.log(employeeInput);

    return (
        <Helmet title="Customer Registration Page">
      <CommonSection title="Employee Registration Page" />
          <MDBContainer fluid className='w-75' style={{ margin: '100px auto' }} >

          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol>

              <MDBCard className='my-4'>

              <MDBRow className='g-0'>

                  <MDBCol md='6' className="d-none d-md-block">
                  <MDBCardImage src='https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Sample photo" className="rounded-start" fluid/>
                  </MDBCol>

                  <MDBCol md='6'>

                  <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>
                      <h3 className="mb-5 text-uppercase fw-bold">Welcome to our Car Rental Service!</h3>
                      
                      <MDBRow>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' classname='name' placeholder={employeeInput.name} label='Name' size='lg' id='name' type='text' onChange={(e) => handleInputChange(e)}/>
                            
                        </MDBCol>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='address' placeholder={employeeInput.address} label='Address' size='lg' id='address' type='text' onChange={(e) => handleInputChange(e)}/>
                            
                        </MDBCol>

                    </MDBRow>


                    <MDBRow>

                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' className='email' placeholder={employeeInput.email} label='Email' size='lg' id='email' type='text' onChange={(e) => handleInputChange(e)}/>

                            
                        </MDBCol>

                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' className='aadhaar_no' placeholder={employeeInput.aadhaar_no} label='UID' size='lg' id='aadhaar_no' type='text' onChange={(e) => handleInputChange(e)}/>

                            
                        </MDBCol>

                    </MDBRow>



                    <MDBRow>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='pan_No' placeholder={employeeInput.pan_No} label='Pan No' size='lg' id='pan_No' type='text' onChange={(e) => handleInputChange(e)}/>
                          

                            
                        </MDBCol>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='date_Of_Birth' placeholder={employeeInput.date_Of_Birth} label='DOB' size='lg' id='date_Of_Birth' type='date' onChange={(e) => handleInputChange(e)}/>
                                                    
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='hire_Date' placeholder={employeeInput.hire_Date} label='Hired On' size='lg' id='hire_Date' type='date' onChange={(e) => handleInputChange(e)}/>
                            
                        </MDBCol>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='department' placeholder={employeeInput.department} label='Department' size='lg' id='department' type='text' onChange={(e) => handleInputChange(e)}/>
                         
                        </MDBCol>
                    </MDBRow>
                    

                    <MDBRow>

                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='job_Title' placeholder={employeeInput.job_Title} label='Post' size='lg' id='job_Title' type='text' onChange={(e) => handleInputChange(e)}/>
  
                        </MDBCol>
                        {/** 
                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='employee_Status' placeholder={employeeInput.employee_Status} label='employee_Status' size='lg' id='employee_Status' type='text' onChange={(e) => handleInputChange(e)}/>
 
                        </MDBCol>
                        */}
                        <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='annual_CTC' placeholder={employeeInput.annual_CTC} label='Annual CTC' size='lg' id='annual_CTC' type='number' onChange={(e) => handleInputChange(e)}/>

                        </MDBCol>
                    </MDBRow>
                                          
                    <MDBRow>
                    
                    <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' className='phone' placeholder={employeeInput.phone} label='Phone No.' size='lg' id='phone' type='text' onChange={(e) => handleInputChange(e)}/>
 
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => postData(e)}>Submit Details</MDBBtn>

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
    ) 
};

export default AddEmployee;

/*
<div>
            <CommonSection title="Employee Registration Page" />
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
*/