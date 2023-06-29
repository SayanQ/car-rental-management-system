import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "150px", marginBottom:"150px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              At carrental.com, we pride ourselves on providing exceptional car rental services to our valued customers. 
              With years of experience in the industry, we have built a strong reputation for reliability, quality, and outstanding customer service.

              Our mission is to make your car rental experience convenient, hassle-free, and enjoyable. We strive to exceed your expectations by 
              offering a diverse fleet of well-maintained vehicles, flexible rental options, and personalized customer support.

              Safety is our top priority. We meticulously maintain our vehicles to ensure they are in pristine condition and meet the highest 
              safety standards. Additionally, we regularly inspect and service our fleet to guarantee a smooth and worry-free driving experience for
              </p>

              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
