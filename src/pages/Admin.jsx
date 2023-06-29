import React,{useState} from 'react' 
import { Link, useNavigate } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import { MDBBtn } from 'mdb-react-ui-kit';

const Admin=()=>{ 
    const navigate = useNavigate();

    const navigateCar = () => {
        navigate('/cars');
    };

    const navigateCustomer = () => {
        navigate('/customers');
    };

    const navigateEmployee = () => {
        navigate('/employees');
    };

    const navigateDriver = () => {
        navigate('/drivers');
    };

    const navigateBooking = () => {
        navigate('/bookings');
    };

    const navigatePayment = () => {
    navigate('/payments');
    };

	return(
        <>
            <CommonSection title="Admin Dashboard" />
            
            <div className = "admin-outer" style={{
                width:"50%",
                display: "findByLabelText",
                justifyContent: "center",
                alignItems: "center",
                margin: "50px auto"
            }}>

                <div className = "admin-box" style={{backgroundImage: "url('https://images.pexels.com/photos/16114925/pexels-photo-16114925/free-photo-of-indicator-on-car-dashboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                                                        width: '100%',
                                                        display: "Grid",
                                                        gridTemplateColumns: "repeat(2, 1fr)", /* Two items per line */
                                                        gridGap: "20px", /* Gap between grid items */
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        margin: "50px",
                                                        padding: "50px",
                                                        border: "black solid",
                                                        borderRadius: "20%"
                                                        }}>
                    <MDBBtn outline onClick={navigateCar} className='mx-2' color='light'>
                        Car
                    </MDBBtn>
                    <MDBBtn outline onClick={navigateCustomer} className='mx-2' color='light'>
                        Customer
                    </MDBBtn>
                    <MDBBtn outline onClick={navigateEmployee} className='mx-2' color='light'>
                        Employee
                    </MDBBtn>
                    <MDBBtn outline onClick={navigateDriver} className='mx-2' color='light'>
                        Driver
                    </MDBBtn>
                    <MDBBtn outline onClick={navigateBooking} className='mx-2' color='light'>
                        Booking
                    </MDBBtn>
                    <MDBBtn outline onClick={navigatePayment} className='mx-2' color='light'>
                        Payment
                    </MDBBtn>
                </div>
            </div>
        </>
                
)};

export default Admin;