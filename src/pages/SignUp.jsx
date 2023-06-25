import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const SignUp= () => {

    const navigate = useNavigate();

    const navigateAdmin = () => {
        navigate('/addEmployee');
    };

    const navigateUser = () => {
        navigate('/addCustomer');
    };

    const navigateDriver = () => {
        navigate('/addDriver');
    };

  return (
    <div className='outer-most' style={{margin:"25px auto",padding:"20px"}}>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://media.istockphoto.com/id/1456995779/photo/young-male-website-developer-sitting-front-of-computers-with-coded-data-on-screen-and-smiling.jpg?b=1&s=612x612&w=0&k=20&c=y51fD07PCstEbW1Izt4VsTMDTD6ZfkQFl0o_k37LpwY='
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Admin</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn outline rounded className='mx-2' color='dark' onClick={navigateAdmin}>
                Admin Registration
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>User</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn outline rounded className='mx-2' color='dark' onClick={navigateUser}>
                User Registration
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.pexels.com/photos/4391481/pexels-photo-4391481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Driver</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn outline rounded className='mx-2' color='dark' onClick={navigateDriver}>
                Driver Registration
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>

</div>
  );
}

export default SignUp;
/*
import React,{useState} from 'react'
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../styles/signup.css";


const SignUp=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}

	return(
        <div class="box-form-outer">
            <div class="box-form">
                <div class="left">
                    <Slider className="hero__slider">
                        

                        <div className="slider__item slider__item-03 mt0">
                        <Container>
                            <div className="slider__content ">
                                <h4 className="text-light mb-3">Welcome to our car rental service company!</h4>
                                <h1 className="text-light mb-4">We are delighted to provide you with a convenient and reliable 
                                solution for all your transportation needs.</h1>
                            </div>
                        </Container>
                        </div>
                    </Slider>
                    <span>
                        <p>login with social media</p>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>Login with Google</a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                    </span>
                </div>
                
                
                <div class="right">
                    <h5>SignUp</h5>
                    <p>Already have an account? <a href="/Login">Click Here</a> </p>
                    <div class="inputs">
                        <input type="email" placeholder="Email Address" />
                        
                        <input type="password" placeholder="Password" />

                        <input type="password" placeholder="Confirm Password" />
                    </div>

                        <button class="signup-btn">SignUp</button>
                </div>
                
            </div>
        </div>        
)};

export default SignUp;
*/