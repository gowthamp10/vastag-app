import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/LoginSigupPage/LoginSignup";
import SignupPro from "./pages/SignupPages/SignupPro";
import SignupCus from "./pages/SignupPages/SignupCus";
import Profile from "./pages/Profile";

import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import AboutPro from "./pages/AboutPro"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path='/login-signup' element={<LoginSignup />} />
                <Route path="/signup-pro" element={<SignupPro />} />
                <Route path="/signup-customer" element={<SignupCus />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about-pro" exact element={<AboutPro />} />

            </Routes>
        </Router>
    )
}