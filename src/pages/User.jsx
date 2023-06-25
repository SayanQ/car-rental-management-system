import React,{useState} from 'react' 
import { Link, useNavigate } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import { MDBBtn } from 'mdb-react-ui-kit';

const Admin=()=>{ 
    const navigate = useNavigate();

    const navigateBooking = () => {
        navigate('/addBooking');
    };

    const navigatePayment = () => {
        navigate('/customers');
    };


	return(
        <>
            <CommonSection title="Customer Dashboard" />
            
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
                    <MDBBtn outline onClick={navigateBooking} className='mx-2' color='light'>
                        BookNow
                    </MDBBtn>
                    <MDBBtn outline onClick={navigatePayment} className='mx-2' color='light'>
                        Payment
                    </MDBBtn>
                    
                </div>
            </div>
        </>
                
)};

export default Admin;