import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/drivers.css";
import Table from 'react-bootstrap/Table';


const GetDriverDetails = () => {

  const [myData,setMyData] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getDriver = async () => {
    
    try {
      const response = await axios.get('/Driver');
      setMyData(response.data);
    } catch (exe) {
      // console.log(exe);
    }

    if(searchValue){
      try {
        const response = await axios.get(`/Driver/byUniqueIdentity/${searchValue}`);
        setMyData(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }

  const getInput = (e) => {
    setSearchValue(searchValue);
    getDriver();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  useEffect(() => {
    getDriver();
  },[searchValue]);

  const deleteDriver = async () => {
    
    try {
      const response = await axios.delete(`/Driver?str=${searchValue}`);
      setMyData(response.data);
      alert("Successfully Deleted!!");
    } catch (exe) {
      // console.log(exe);
    }
    
  }


  const navigate = useNavigate();

  const addDriver = () => {
    navigate('/addDriver');
};

//console.log(myData);
if (Array.isArray(myData)){
  return (      
    <Helmet title="Cars">
      <CommonSection title="Customer" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <input type="text" id="search" className="search" value={searchValue} onChange={handleInputChange} placeholder="Phone/Pan/Email/Aadhaar" />
                <button className="search" onClick={getInput}>Search</button>
                <button className="search" onClick={(e) => addDriver(e)}>Add Driver</button>
              </div>
            </Col>
          </Row>      
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>Aadhaar No</th>
                  <th>Pan No</th>
                  <th>DOB</th>
                  <th>Driving Licence</th>
                  <th>Driving Licence Expiry Date</th>
                  <th>km Driven</th>
                  <th>Charges / Hour</th>
                </tr>
              </thead>
              {
                myData.map((driver) => (
                  <tbody>
                    <tr>
                      <td>{driver.name}</td>
                      <td>{driver.address}</td>
                      <td>{driver.phone}</td>
                      <td>{driver.email}</td>
                      <td>{driver.adhaar_no}</td>
                      <td>{driver.pan_No}</td>
                      <td>{driver.date_Of_Birth}</td>
                      <td>{driver.driving_Licence_No}</td>
                      <td>{driver.driving_Licence_Valid_Till}</td>
                      <td>{driver.km_Driven}</td>
                      <td>{driver.charges_Per_Hour}</td>
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
                <input type="text" id="search" className="search" value={searchValue} onChange={handleInputChange} placeholder="Phone/Pan/Email/Aadhaar" />
                <button className="search" onClick={getInput}>Search</button>
              </div>
            </Col>
          </Row>      
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>Aadhaar No</th>
                  <th>Pan No</th>
                  <th>DOB</th>
                  <th>Driving Licence</th>
                  <th>Driving Licence Expiry Date</th>
                  <th>km Driven</th>
                  <th>Charges / Hour</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {
                <tbody>
                
                <tr>
                    <td>{myData.name}</td>
                    <td>{myData.address}</td>
                    <td>{myData.phone}</td>
                    <td>{myData.email}</td>
                    <td>{myData.adhaar_no}</td>
                    <td>{myData.pan_No}</td>
                    <td>{myData.date_Of_Birth}</td>
                    <td>{myData.driving_Licence_No}</td>
                    <td>{myData.driving_Licence_Valid_Till}</td>
                    <td>{myData.km_Driven}</td>
                    <td>{myData.charges_Per_Hour}</td>                    
                  <td><Button>Update</Button></td>
                  <td><Button onClick={deleteDriver}>Delete</Button></td>
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

export default GetDriverDetails;

