import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home.jsx";
import MakePizzas from "../pages/MakePizza.jsx";
import Cart from "../pages/Cart.jsx";
import Profile from "../pages/Profile.jsx";
import NoPage from "../pages/NoPage.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Logout from "../pages/Logout.jsx";
import SendPage from "../pages/SendPage.jsx";
import MyPizza from "../pages/MyPizza.jsx";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/makePizzas" element={<MakePizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/send" element={<SendPage />} />
      <Route path="/mypizza" element={<MyPizza />} />
      <Route path="*" element={<NoPage />} />
      const token = localStorage.getItem('token')
    </Routes>
  );
};

export default Routers;
