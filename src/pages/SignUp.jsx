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