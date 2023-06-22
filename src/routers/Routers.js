import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";
import Cars from "../pages/Cars";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Drivers from "../pages/Drivers";
import Customers from "../pages/Customers";
//import CustomerDetails from "../pages/CustomerDetails";
import Employees from "../pages/Employees";
import Bookings from "../pages/Bookings";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Admin from "../pages/Admin";


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
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/customers" element={<Customers />} />
      {/*<Route path="/customersDetails" element={<CustomerDetails />} />*/}
      <Route path="/employees" element={<Employees />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
