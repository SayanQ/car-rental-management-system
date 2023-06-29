import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About";

import Cars from "../pages/Cars";
import AddCar from "../pages/AddCar";
import UpdateCar from "../pages/UpdateCar";

import Drivers from "../pages/Drivers";
import AddDriver from "../pages/AddDriver";
import UpdateDriver from "../pages/UpdateDriver";

import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";
import UpdateCustomer from "../pages/UpdateCustomer";

import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";
import UpdateEmployee from "../pages/UpdateEmployee";

import Bookings from "../pages/Bookings";
import AddBooking from "../pages/AddBooking";
import UpdateBooking from "../pages/UpdateBooking";

import Payments from "../pages/Payments";
import AddPayment from "../pages/AddPayment";

import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

import Admin from "../pages/Admin";
import User from "../pages/User";
import UserDriver from "../pages/UserDriver";

import TestId from "../pages/TestId";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/userDriver" element={<UserDriver />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/updateCar/:car_No" element={<UpdateCar />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/addDriver" element={<AddDriver />} />
      <Route path="/updateDriver/:phone" element={<UpdateDriver />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/addCustomer" element={<AddCustomer />} />
      <Route path="/updateCustomer/:phone" element={<UpdateCustomer />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/updateEmployee/:phone" element={<UpdateEmployee />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/addBooking" element={<AddBooking />} />
      <Route path="/updateBooking" element={<updateBooking />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/addPayment" element={<AddPayment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
      <Route path="testId" element={<TestId />} />
    </Routes>
  );
};

export default Routers;
