import React from "react";
import { Link } from "react-router-dom";

import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div className={scss.header}>
      <Link className={scss.logo} to="/">
        Janetta
      </Link>
      <div className={scss.nav}>
        <Link className={scss.link} to="/">
          Home
        </Link>
        <Link className={scss.link} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
