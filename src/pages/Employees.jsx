import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/customer-details.css";
import Table from 'react-bootstrap/Table';


const GetEmployee = () => {

  const [myData,setMyData] = useState([]);
  const [searchValue,setSearchValue] = useState([]);

  const getEmployee = async () => {
    
    try {
      const response = await axios.get('/Employee');
      setMyData(response.data);
    } catch (exe) {
      // console.log(exe);
    }

    if(searchValue){
      try {
        const response = await axios.get(`/Employee/${searchValue}`);
        setMyData(response.data);
      } catch (exe) {
        // console.log(exe);
      }
    }
  }

  const getInput = (e) => {
    setSearchValue(searchValue);
    getEmployee();
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };


  useEffect(() => {
    getEmployee();
  },[searchValue]);

  const deleteEmployee = async () => {
    
    try {
      const response = await axios.delete(`/Employee/${searchValue}`);
      setMyData(response.data);
      alert("Successfully Deleted!!");
    } catch (exe) {
      // console.log(exe);
    }
    
  }

  const navigate = useNavigate();

  const addEmployee = () => {
    navigate('/addEmployee');
};


//console.log(myData);
if (Array.isArray(myData)){
  return (      
    <Helmet title="Cars">
      <CommonSection title="Employees" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <input type="text" id="search" className="search" value={searchValue} onChange={handleInputChange} placeholder="Phone/Pan/Email/Aadhaar" />
                <button className="search" onClick={getInput}>Search</button>
                <button className="search" onClick={(e) => addEmployee(e)}>Add Employee</button>
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
                  <th>Hired On</th>
                  <th>Job Post</th>
                  <th>Department</th>
                  <th>Annual CTC</th>
                </tr>
              </thead>
              {
                myData.map((employee) => (
                  <tbody>
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.address}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                      <td>{employee.aadhaar_no}</td>
                      <td>{employee.pan_No}</td>
                      <td>{employee.date_Of_Birth}</td>
                      <td>{employee.hire_Date}</td>
                      <td>{employee.job_Title}</td>
                      <td>{employee.department}</td>
                      <td>{employee.annual_CTC}</td>
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
                  <th>Hired On</th>
                  <th>Job Post</th>
                  <th>Department</th>
                  <th>Annual CTC</th>
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
                  <td>{myData.hire_Date}</td>
                  <td>{myData.job_Title}</td>
                  <td>{myData.department}</td>
                  <td>{myData.annual_CTC}</td>
                  <td><Button>Update</Button></td>
                  <td><Button onClick={deleteEmployee}>Delete</Button></td>
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

export default GetEmployee;