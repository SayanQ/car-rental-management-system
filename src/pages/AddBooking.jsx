import React, { useState } from "react";
import axios from "../assets/axios.jsx";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
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


const BookCar = () => {

    const [c_Id, setC_Id] = useState(0);
    const [d_Id, setD_Id] = useState(0);
    const [cu_Id, setCU_Id] = useState(0);
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(0);
    const [pickupLocation, setPickupLocation] = useState(0);
    const [dropOffLocation, setDropOffLocation] = useState(0);
    const [bookingId, setBookingId] = useState(0);

    const [carNoInput, setcarNoInput] = useState();

    const handleCarNoChange = (e) => {
        setcarNoInput(e.target.value);
    }
    
    const [driverPhoneNoInput, setDriverPhoneNoInput] = useState();

    const handleDriverPhoneNoChange = (e) => {
        setDriverPhoneNoInput(e.target.value);
    }
    
    const [customerPhoneNoInput, setCustomerPhoneNoInput] = useState();

    const handleCustomerPhoneNoChange = (e) => {
        setCustomerPhoneNoInput(e.target.value);

    }

    const handlePickUpLoactionChange = (e) => {
        setPickupLocation(e.target.value);
    }
    const handleDropOffLoactionChange = (e) => {
        setDropOffLocation(e.target.value);
    }
    
    const handleRentalStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleRentalEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const getCarId = async (e) => {
        await axios.get(`/Car/forBooking/${carNoInput}`)
            .then(((response) => {
                setC_Id(response.data);                    
            })).catch((e)=>console.log(e.response));
    };

    const getDriverId = async (e) => {
        await axios.get(`/Driver/forBooking/${driverPhoneNoInput}`)
            .then(((response) => {
                setD_Id(response.data);
            })).catch((e)=>console.log(e.response));
    };

    const getCustomerId = async (e) => {
        await axios.get(`/Customer/forBooking/${customerPhoneNoInput}`)
            .then(((response) => {
                setCU_Id(response.data);
            })).catch((e)=>console.log(e.response));
    };

    const getBookingId = async (e) => {
        await axios.get(`/Booking/forBooking/${c_Id}/${cu_Id}/${d_Id}`)
            .then(((response) => {
                setBookingId(response.data);
            })).catch((e)=>console.log(e.response));
    };
    
    const postData = async (e) => {
        const bookingData = {
            "carId": c_Id,
            "driverId": d_Id,
            "customerId": cu_Id,
            "booking_Date_Time": "2023-06-25",
            "rental_Start_Date_Time": startDate,
            "rental_End_Date_Time": endDate,
            "pick_Up_Location": pickupLocation,
            "drop_Off_Location": dropOffLocation
        };

        console.log(JSON.stringify(bookingData));
        
        try {
            await axios.post('/Booking', bookingData)
            .then((response) => console.log(response)
            ).
            alert('Booking Successfull!!');

          } catch (exe) {
            // console.log(exe);
          }
        
    }
    console.log(bookingId);

    const navigate = useNavigate();

    const navigatePayment = () => {
        navigate('/addPayment');
    };

    return (
        
    <Helmet title="Car Registration Page">
    <CommonSection title="Booking" />
        <MDBContainer fluid className=' w-75' style={{ margin: '100px auto' }} >

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

            <MDBCard className='my-4'>

            <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://cdn.pixabay.com/photo/2019/04/23/05/25/car-4148514_640.jpg' alt="Sample photo" className="rounded-start" fluid/>
                </MDBCol>

                <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>

                <MDBRow>
                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='car_No' placeholder="AB12CD3456" label='Car No' size='lg' id='car_No' type='text' onChange={(e) => handleCarNoChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => getCarId(e)}>Confirm Car Selection</MDBBtn>
                    </MDBCol>

                    <MDBCol md='11'>
                        <h6 style={{paddingBottom:"20px"}}>Your select a car with Id : {c_Id}</h6>
                    </MDBCol>
                </MDBRow>  

                <MDBRow>
                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' classname='customer_phone_no' placeholder="" label='Your phone No' size='lg' id='customer_phone_no' type='text' onChange={(e) => handleCustomerPhoneNoChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => getCustomerId(e)}>Confirm Your Phone No</MDBBtn>
                    </MDBCol>

                    <MDBCol md='11'>
                        <h6 style={{paddingBottom:"20px"}}>Your Id is : {cu_Id}</h6>
                    </MDBCol>
                </MDBRow>

                <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='driver_phone_no' placeholder="" label='Driver Phone No' size='lg' id='driver_phone_no' type='text' onChange={(e) => handleDriverPhoneNoChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => getDriverId(e)}>Confirm Driver's Phone No</MDBBtn>
                    </MDBCol>

                    <MDBCol md='11'>
                        <h6 style={{paddingBottom:"20px"}}>You select a driver with Id : {d_Id}</h6>
                    </MDBCol>
                </MDBRow>

                <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='rental_Start_Date_Time' label='Type' size='lg' id='rental_Start_Date_Time' type='date' onChange={(e) => handleRentalStartDate(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='rental_End_Date_Time'  label='End Date' size='lg' id='rental_End_Date_Time' type='date' onChange={(e) => handleRentalEndDate(e)}/>
                    </MDBCol>

                </MDBRow>

                <MDBRow>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='pick_Up_Location' placeholder="" label='Pick Up' size='lg' id='pick_Up_Location' type='text' onChange={(e) => handlePickUpLoactionChange(e)}/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' className='drop_Off_Location' placeholder="" label='Drop Off' size='lg' id='drop_Off_Location' type='text' onChange={(e) => handleDropOffLoactionChange(e)}/>
                    </MDBCol>

                </MDBRow>
                
                    
                <div className="d-flex justify-content-end pt-3">
                <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => postData(e)}>Submit</MDBBtn>
                </div>

                <div className="d-flex justify-content-end pt-3">
                <MDBBtn className='ms-2' color='warning' size='lg' onClick={(e) => getBookingId(e)}>Click Here For Booking Id: </MDBBtn>
                <p>Booking Id: {bookingId}</p>
                </div>

                <div className="d-flex justify-content-end pt-3">
                <MDBBtn className='ms-2' color='warning' size='lg' onClick={navigatePayment}>Redirect To Payment Page</MDBBtn>
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

export default BookCar;