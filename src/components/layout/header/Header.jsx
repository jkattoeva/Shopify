import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import cartNav from "../../../assets/svg/cartHeader.svg";
import { categories } from "../../../data/data";
import scss from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${active ? scss.header_active : scss.header}`}>
      <Link className={scss.logo} to="/">
        <img
          src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/110/8414017110_8e9062f0-6eb2-4950-be7c-f82071b345c6.png?cb=1686784983"
          alt="logo"
        />
      </Link>
      <div onClick={handleChangeToggle} className={scss.burger}>
        {toggle ? "Close" : "Burger"}
      </div>
      <div className={toggle ? scss.nav_active : scss.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? scss.active_link : scss.link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? scss.active_link : scss.link
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? scss.active_link : scss.link
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink className={scss.link_cart} to="/cart">
          <img src={cartNav} alt="cart" />
          <span>{categories.length}</span>
        </NavLink>
        <Link className={scss.link_signIn} to="/signIn">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
