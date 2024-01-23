import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import MakePizzas from "../pages/MakePizza";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/makePizzas" element={<MakePizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NoPage />} />
      const token = localStorage.getItem('token')
    </Routes>
  );
};

export default Routers;
