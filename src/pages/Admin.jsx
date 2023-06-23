import React,{useState} from 'react' 
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import "../styles/admin.css";

const Admin=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}

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
    };
    navigate('/payments');

	return(
        <>
            <CommonSection title="Admin Dashboard" />
            
            <div className = "admin-outer">

                <div className = "admin-box">
                    <div className = "admin-btn">
                        <Button onClick={navigateCar} className = "btn-content">Car</Button>
                    </div>
                    <div className = "admin-btn">
                        <Button onClick={navigateCustomer} className = "btn-content">Customer</Button>
                    </div>
                    <div className = "admin-btn">
                        <Button onClick={navigateEmployee} className = "btn-content">Employee</Button>
                    </div>
                    <div className = "admin-btn">
                        <Button onClick={navigateDriver} className = "btn-content">Driver</Button>
                    </div>
                    <div className = "admin-btn">
                        <Button onClick={navigateBooking} className = "btn-content">Booking</Button>
                    </div>
                    <div className = "admin-btn">
                        <Button onClick={navigatePayment} className = "btn-content">Payment</Button>
                    </div>
                </div>
            </div>
        </>
                
)};

export default Admin;