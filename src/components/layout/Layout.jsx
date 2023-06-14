import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
