import React from "react";
import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={scss.footer}>
      <Link className={scss.logo} to="/">
        <img
          src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/110/8414017110_8e9062f0-6eb2-4950-be7c-f82071b345c6.png?cb=1686784983"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Footer;
