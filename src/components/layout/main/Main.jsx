import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ContactPage from "../../pages/ContactPage";
import AboutPage from "../../pages/AboutPage";
import SignInPage from "../../pages/SignInPage";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
};

export default Main;
