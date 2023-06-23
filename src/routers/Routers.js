import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";
import Cars from "../pages/Cars";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import AddCar from "../pages/AddCar";
import UpdateCar from "../pages/UpdateCar";
import Drivers from "../pages/Drivers";
import AddDriver from "../pages/AddDriver";
import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";
//import CustomerDetails from "../pages/CustomerDetails";
import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";
import Bookings from "../pages/Bookings";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Admin from "../pages/Admin";
import Payments from "../pages/Payments";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/updateCar/:car_No" element={<UpdateCar />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/addDriver" element={<AddDriver />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/addCustomer" element={<AddCustomer />} />
      {/*<Route path="/customersDetails" element={<CustomerDetails />} />*/}
      <Route path="/employees" element={<Employees />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
