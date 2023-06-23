import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/cars.css";
import Table from 'react-bootstrap/Table';


const GetCarDetails = () => {

  const [myData,setMyData] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getCar = async () => {
    
    try {
      const response = await axios.get('/Car');
      setMyData(response.data);
    } catch (exe) {
      // console.log(exe);
    }

    if(searchValue){
      try {
        const response = await axios.get(`/Car/${searchValue}`);
        setMyData(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }


  const deleteCar = async () => {
    
    try {
      const response = await axios.delete(`/Car/${searchValue}`);
      setMyData(response.data);
      alert("Successfully Deleted!!");
    } catch (exe) {
      // console.log(exe);
    }
    
  }

  const navigate = useNavigate();

  const addCar = () => {
    navigate('/addCar');
  }

  const updateCar = async () => {
    navigate(`/updateCar/${myData.car_No}`);
  }


  const getInput = () => {
    setSearchValue(searchValue);
    getCar();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  useEffect(() => {
    getCar();
  },[]);

  
//console.log(myData);
if (Array.isArray(myData)){
  return (      
    <Helmet title="Cars">
    <CommonSection title="Cars" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <input type="text" id="search" className="search" value={searchValue} onChange={handleInputChange} placeholder="Car No" />
                <button className="search" onClick={getInput}>Search</button>
                <button className="search" onClick={(e) => addCar(e)}>Add Car</button>
              </div>
            </Col>
          </Row>      
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>car No</th>
                  <th>Model</th>
                  <th>Company</th>
                  <th>Type</th>
                  <th>Colour</th>
                  <th>Year Of Manufacturing</th>
                  <th>km Driven</th>
                  <th>Sitting Capacity</th>
                  <th>Boot Space</th>
                  <th>Charges / Hour</th>
                </tr>
              </thead>
              {
                myData.map((car) => (
                  <tbody>
                    <tr>
                      <td>{car.car_No}</td>
                      <td>{car.model}</td>
                      <td>{car.company}</td>
                      <td>{car.type}</td>
                      <td>{car.colour}</td>
                      <td>{car.year_Of_Manufacturing}</td>
                      <td>{car.km_Driven}</td>
                      <td>{car.sitting_Capacity}</td>
                      <td>{car.boot_space}</td>
                      <td>{car.charges_Per_Hour}</td>
                    </tr>
                    
                  </tbody>
                  ))
              }
          </Table>
        </div>
        </Container>
      </section>
    </Helmet>
  );
}
else{
  return (      
    <Helmet title="Cars">
      <CommonSection title="Customer" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <input type="text" id="search" className="search" value={searchValue} onChange={handleInputChange} placeholder="Car No" />
                <button className="search" onClick={getInput}>Search</button>
              </div>
            </Col>
          </Row>      
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                    <th>car No</th>
                  <th>Model</th>
                  <th>Company</th>
                  <th>Type</th>
                  <th>Colour</th>
                  <th>Year Of Manufacturing</th>
                  <th>km Driven</th>
                  <th>Sitting Capacity</th>
                  <th>Boot Space</th>
                  <th>Charges / Hour</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {
                <tbody>
                
                <tr>
                    <td>{myData.car_No}</td>
                    <td>{myData.model}</td>
                    <td>{myData.company}</td>
                    <td>{myData.type}</td>
                    <td>{myData.colour}</td>
                    <td>{myData.year_Of_Manufacturing}</td>
                    <td>{myData.km_Driven}</td>
                    <td>{myData.sitting_Capacity}</td>
                    <td>{myData.boot_space}</td>
                    <td>{myData.charges_Per_Hour}</td>                    
                  <td><Button onClick={(e) => updateCar(e)}>Update</Button></td>
                  <td><Button onClick={deleteCar}>Delete</Button></td>
                </tr>
              </tbody>
              }
          </Table>
        </div>
        </Container>
      </section>
    </Helmet>
  );
}  
};

export default GetCarDetails;

