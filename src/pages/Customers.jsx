import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/customer-details.css";
import Table from 'react-bootstrap/Table';


const GetCustomer = () => {

  const [myData,setMyData] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getCustomer = async () => {
    
    try {
      const response = await axios.get('/Customer');
      setMyData(response.data);
    } catch (exe) {
      // console.log(exe);
    }

    if(searchValue){
      try {
        const response = await axios.get(`/Customer/byUniqueIdentity/${searchValue}`);
        setMyData(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }

  const getInput = (e) => {
    setSearchValue(searchValue);
    getCustomer();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  const deleteCustomer = async () => {
    
    try {
      const response = await axios.delete(`/Customer/${searchValue}`);
      setMyData(response.data);
      alert("Successfully Deleted!!");
    } catch (exe) {
      // console.log(exe);
    }
    
  }
  const navigate = useNavigate();

  const addCustomer = () => {
    navigate('/addCustomer');
};

const updateCustomer = () => {
  navigate(`/updateCustomer/${myData.phone}`);
};


useEffect(() => {
  getCustomer();
},[]);


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
                <input type="text" id="search" className="search" value={searchValue} onChange={(e) => handleInputChange(e)} placeholder="Phone/Pan/Email/Aadhaar" />
                <button className="search" onClick={(e) => getInput(e)}>Search</button>
                <button Link to className="search" onClick={(e) => addCustomer(e)}>Add Customer</button>
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
                </tr>
              </thead>
              {
                myData.map((customer) => (
                  <tbody>
                    <tr>
                      <td>{customer.name}</td>
                      <td>{customer.address}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.email}</td>
                      <td>{customer.aadhaar_no}</td>
                      <td>{customer.pan_No}</td>
                      <td>{customer.date_Of_Birth}</td>
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
                <input type="text" id="search" className="search" value={searchValue} onChange={(e) => handleInputChange(e)} placeholder="Phone/Pan/Email/Aadhaar" />
                <button className="search" onClick={(e) => getInput(e)}>Search</button>
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
                  <td>{myData.aadhaar_no}</td>
                  <td>{myData.pan_No}</td>
                  <td>{myData.date_Of_Birth}</td>
                  <td><Button Button onClick={(e) => updateCustomer(e)}>Update</Button></td>
                  <td><Button onClick={deleteCustomer}>Delete</Button></td>
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

export default GetCustomer;

