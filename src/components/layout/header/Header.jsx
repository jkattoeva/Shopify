import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleIcon = () => {
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
      <Link
        onClick={toggleIcon}
        className={`${toggle ? scss.burger : scss.nav_vis}`}
      >
        Burger
      </Link>
      <div className={`${scss.nav} ${toggle ? scss.nav_vis : ""}`}>
        <Link className={scss.link} to="/">
          Home
        </Link>
        <Link className={scss.link} to="/contact">
          Contact
        </Link>
        <Link className={scss.link} to="/about">
          About
        </Link>
        <Link className={scss.link} to="/signIn">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
