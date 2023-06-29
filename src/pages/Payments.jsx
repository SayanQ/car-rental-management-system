import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/customer-details.css";
import Table from 'react-bootstrap/Table';


const GetPayment = () => {

  const [myData,setMyData] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getPayment = async () => {
    
    try {
      const response = await axios.get('/Payment');
      setMyData(response.data);
    } catch (exe) {
      // console.log(exe);
    }

    if(searchValue){
      try {
        const response = await axios.get(`/Payment/${searchValue}`);
        setMyData(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }

  const getInput = (e) => {
    setSearchValue(searchValue);
    getPayment();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  useEffect(() => {
    getPayment();
  },[searchValue]);

  const deletePayment = async () => {
    
    try {
      const response = await axios.delete(`/Payment/${searchValue}`);
      setMyData(response.data);
      alert("Successfully Deleted!!");
    } catch (exe) {
      // console.log(exe);
    }
    
  }


console.log(myData);
if (Array.isArray(myData)){
  return (      
    <Helmet title="Cars">
      <CommonSection title="All Payments" />

      <section>
        <Container>
               
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                    <th>Booking Id</th>
                    <th>Payment Type</th>
                    <th>Payment Status</th>
                    <th>Payment Date</th>
                    <th>Amount</th>
                </tr>
              </thead>
              {
                myData.map((payment) => (
                  <tbody>
                    <tr>
                      <td>{payment.bookingId}</td>
                      <td>{payment.payment_Type}</td>
                      <td>{payment.payment_Status}</td>
                      <td>{payment.payment_Date_Time}</td>
                      <td>{payment.amount}</td>
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
                  <th>Booking Id</th>
                  <th>Payment Type</th>
                  <th>Payment Status</th>
                  <th>Payment Date</th>
                  <th>Amount</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {
                <tbody>
                <tr>
                  <td>{myData.bookingId}</td>
                  <td>{myData.payment_Type}</td>
                  <td>{myData.payment_Status}</td>
                  <td>{myData.payment_Date_Time}</td>
                  <td>{myData.amount}</td>
                  <td><Button>Update</Button></td>
                  <td><Button onClick={deletePayment}>Delete</Button></td>
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

export default GetPayment;

