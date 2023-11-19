import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemList from "../../pages/itemList/ItemList";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import SignUp from "../../pages/auth/signUp/SignUp";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import scss from "./Main.module.scss";
import RegisterForm from "../../pages/auth/signUpform/SignUpForm";

const Main = () => {
  return (
    <>
      <div className={scss.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/category/:categoryId" element={<ItemList />} />
        </Routes>
      </div>
    </>
  );
};

export default Main;
