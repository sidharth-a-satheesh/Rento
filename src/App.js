import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Landing from "./pages/home/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}
