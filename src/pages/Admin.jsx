import React,{useState} from 'react' 
import Slider from "react-slick";
import { Button, Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
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

  const navigateCustomer = () => {
    navigate('/customers');//fix this
  };

	return(
        <div className = "admin-outer">
            <div className = "admin-box">
                <div className = "admin-btn">
                    <Button className = "btn-content">Car</Button>
                </div>
                <div className = "admin-btn">
                    <Button onClick={navigateCustomer} className = "btn-content">Customer</Button>
                </div>
                <div className = "admin-btn">
                    <Button className = "btn-content">Employee</Button>
                </div>
                <div className = "admin-btn">
                    <Button className = "btn-content">Driver</Button>
                </div>
                <div className = "admin-btn">
                    <Button className = "btn-content">Booking</Button>
                </div>
                <div className = "admin-btn">
                    <Button className = "btn-content">Payment</Button>
                </div>
            </div>
        </div>
                
)};

export default Admin;