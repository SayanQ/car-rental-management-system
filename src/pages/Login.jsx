import React,{useState} from 'react' 
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login=()=>{ 
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
                        <div className="slider__item slider__item-02 mt0">
                        <Container>
                            <div className="slider__content ">
                                <h4 className="text-light mb-3">Welcome to our car rental service company!</h4>
                                <h1 className="text-light mb-4">We are delighted to provide you with a convenient and reliable 
                                solution for all your transportation needs.</h1>
                            </div>
                            </Container>
                        </div>
                    </Slider>
                </div>
                
                
                <div class="right">
                    <h5>Login</h5>
                    <p>Don't have an account? <a href="/SignUP">Creat Your Account</a> it takes less than a minute</p>
                    <div class="inputs">
                        <input type="email" placeholder="Email Address" />
                            
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class="remember-me--forget-password">
                        
                    <label>
                        <input type="checkbox" name="item" checked/>
                        <span class="text-checkbox">Remember me</span>
                    </label>
                        <p>forget password?</p>
                    </div>
                        <button>Login</button>
                </div>
                
            </div>
        </div>        
)};

export default Login;