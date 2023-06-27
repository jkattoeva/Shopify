import React from "react";
import Directory from "../directory/Directory";
import { categories } from "../../../data/data";
import scss from "../Styles.module.scss";

const Home = () => {
  return (
    <div className={scss.home__page}>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
