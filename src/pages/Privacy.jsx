import React,{useState} from 'react' 
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/privacy.css";

const Privacy=()=>{ 

    const settings = {
        fade: true,
        speed: 3000,
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
      };
	return(
        <div class="body">
            <div class="box-form">
                <Slider {...settings} className="hero__slider">
                    <div className="slider__item slider__item-01 mt0">
                        <Container>
                        <div className="slider__content ">
                            <h1 className="text-light mb-3">Privacy Policy for Car Rental Service</h1>
                            <p className="text-light mb-4">
                            If you require any more information or have any questions 
                            about our privacy policy, please feel free to contact us by email at quaries@carrental.com.</p>
                            <p>At carrental.com we consider the privacy of our visitors to be extremely important. 
                            This privacy policy document describes in detail the types of personal information is collected 
                            and recorded by carrental.com and how we use it.</p>
                            <p>At carrental.com we consider the privacy of our visitors to be extremely important. 
                            This privacy policy document describes in detail the types of personal information is collected 
                            and recorded by carrental.com and how we use it.</p>                         
                                
                        </div>
                        </Container>
                    </div>

                    <div className="slider__item slider__item-02 mt0">
                        <Container>
                            <div className="slider__content ">
                            <h1 className="text-light mb-3">Privacy Policy for Car Rental Service</h1>
                            <p className="text-light mb-4">
                            <span>Log Files</span><br /> Like many other Web sites, carrental.com makes use of log files. 
                            These files merely logs visitors to the site – usually a standard procedure for hosting companies 
                            and a part of hosting services's analytics. The information inside the log files includes internet 
                            protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit 
                            pages, and possibly the number of clicks. This information is used to analyze trends, administer the 
                            site, track user's movement around the site, and gather demographic information. IP addresses, and 
                            other such information are not linked to any information that is personally identifiable. </p>
                            </div>
                        </Container>
                    </div>

                    <div className="slider__item slider__item-03 mt0">
                        <Container>
                            <div className="slider__content ">
                            <h1 className="text-light mb-3">Privacy Policy for Car Rental Service</h1>
                            <p className="text-light mb-4">
                            <span>Cookies and Web Beacons</span><br />carrental.com uses cookies to store information about visitors' preferences, 
                            to record user-specific information on which pages the site visitor accesses or visits, and to personalize or 
                            customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser. </p>
                            </div>
                        </Container>
                    </div>
                </Slider>       
            </div>
        </div>       
)};

export default Privacy;