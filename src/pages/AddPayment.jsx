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
    MDBDropdown, 
    MDBDropdownMenu, 
    MDBDropdownToggle, 
    MDBDropdownItem    
  }
  from 'mdb-react-ui-kit';


const MakePayment = () => {
/*
    const [booking_Id, setBooking_Id] = useState(0);
    const [payment_Type, setPayment_Type] = useState(0);
*/
    const [booking_Id, setBooking_Id] = useState(0);

    const handleBookingIdChange = (e) => {
        setBooking_Id(e.target.value);
    }
    
    const [payment_Type, setPayment_Type] = useState("");

    const handlePaymentTypeChange = (e) => {
        setPayment_Type(e.target.value);
    }
   /* 
    const handlePickUpLoactionChange = (e) => {
        setPickupLocation(e.target.value);
    }
    
    
    const handleRentalStartDate = (e) => {
        setStartDate(e.target.value);
    }
    */
  
    const postData = async (e) => {
        const paymentData = {
            "bookingId": booking_Id,
            "payment_Type": payment_Type,
            "payment_Status": "Complete",
            "payment_Date_Time": "2023-06-26",
            "amount": 2000
        };

        console.log(JSON.stringify(paymentData));

        await axios.post('/Payment', paymentData)
            .then((response) => console.log(response)
            ).catch((exe) => console.log(exe) );
    
    }


    return (
        
    <Helmet title="Car Registration Page">
    <CommonSection title="Payment Page" />
        <MDBContainer fluid className=' w-75' style={{ margin: '100px auto' }} >

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

            <MDBCard className='my-4'>

            <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://plus.unsplash.com/premium_photo-1682511146140-d1f3687dec9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF5bWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt="Sample photo" className="rounded-start" fluid/>
                </MDBCol>

                <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center align-items-center'>

                <MDBRow>
                    <MDBCol md='11'>
                        <MDBInput wrapperClass='mb-4' className='booking_Id' placeholder="" label='Booking Id' size='lg' id='booking_Id' type='text' onChange={(e) => handleBookingIdChange(e)}/>
                    </MDBCol>

                    
                </MDBRow>  

                <MDBRow>
                    <MDBCol md='6'>
                        {/*<MDBInput wrapperClass='mb-4' classname='paymentType' placeholder="" label='Your phone No' size='lg' id='paymentType' type='text' onChange={(e) => handlePaymentTypeChange(e)}/>*/}
                    
                        <select className="paymentType" id="paymentType" onChange={handlePaymentTypeChange}>
                            <option value="card">Card</option>
                            <option value="cash">Cash</option>
                            <option value="upi">Upi</option>
                        </select>
                    </MDBCol>

                    
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

); 
}

export default MakePayment;