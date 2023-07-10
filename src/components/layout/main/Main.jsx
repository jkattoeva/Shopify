import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemList from "../../pages/itemList/ItemList";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import SignUp from "../../pages/auth/signUp/SignUp";
import SignIn from "../../pages/auth/signIn/SignIn";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import scss from "./Main.module.scss";
const Main = () => {
  return (
    <>
      <div className={scss.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/category/:categoryId" element={<ItemList />} />
        </Routes>
      </div>
    </>
  );
};

export default Main;
