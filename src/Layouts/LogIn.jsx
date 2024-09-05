// src/Layouts/LogIn.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginPage from "../Components/LoginPage";
import ForgotPage from "../Components/ForgotPage";

function LogIn() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPage />} />
      </Routes>
      
    </>
  );
}

export default LogIn;
