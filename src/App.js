import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Items from "./pages/category/Category";
import ScrollToTop from "./ScrollToTop";
import News from "./pages/home/News";
import ForgotPass from "./pages/login/ForgotPass";
import Contact from "./pages/contact/Contact";
import Subscription from "./pages/subscription/Subscription";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News type="view-all" />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/category/vehicles"
          element={<Items backImg="vehicles" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
