import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "../assets/axios.jsx";
import "../styles/bookings.css";
import Table from 'react-bootstrap/Table';

const Drivers = () => {

  const [myData,setMyData] = useState([]);

  const getALLBookings = async () => {
    try {
        const response = await axios.get('/Booking');
        setMyData(response.data);
      
    } catch (exe) {
      // console.log(exe);
    }
  };

  useEffect(() => {
    getALLBookings();
  },[]);

//console.log(myData);

  return (
    <Helmet title="Cars">
      <CommonSection title="All Bookings" />

      <section>
        <Container>
                
          <div className="table">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Car Id</th>
                  <th>Driver Id</th>
                  <th>Customer Id</th>
                  <th>Booking Date</th>
                  <th>Rental Start</th>
                  <th>Rental End</th>
                  <th>Pick Up</th>
                  <th>Drop Off</th>
                </tr>
              </thead>
              {myData.map((booking) => (
              <tbody>
                <tr>
                  <td>{booking.carId}</td>
                  <td>{booking.driverId}</td>
                  <td>{booking.customerId}</td>
                  <td>{booking.booking_Date_Time}</td>
                  <td>{booking.rental_Start_Date_Time}</td>
                  <td>{booking.rental_End_Date_Time}</td>
                  <td>{booking.pick_Up_Location}</td>
                  <td>{booking.drop_Off_Location}</td>
                </tr>
                
              </tbody>
              ))}
          </Table>
        </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Drivers;