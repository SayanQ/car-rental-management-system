import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const DriverItem = (props) => {
  const { name, address, phone, email, adhaar_no, pan_No, date_Of_Birth, driving_Licence_No,driving_Licence_Valid_Till, km_Driven, charges_Per_Hour} = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      {/**<div className="car__item">
        <div className="car__img"> 
          <img src={imgUrl} alt="" className="w-100" />
        </div>*/}
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">
            ${charges_Per_Hour}.00 <span>/ Day</span>
          </h6>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{address}</h4>
          <h6 className="rent__price text-center mt-">
            ${charges_Per_Hour}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {phone}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {km_Driven}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {charges_Per_Hour}
            </span>
          </div>
          {/** 
          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>*/}
        </div>
      </div>
    </Col>
  );
};

export default DriverItem;