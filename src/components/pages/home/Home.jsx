import React from "react";
import Directory from "../directory/Directory";
import { categories } from "../../../data/data";
import HeadContent from "../headContent/HeadContent";
import scss from "../Styles.module.scss";

const Home = () => {
  return (
    <div className={scss.home__page}>
      <HeadContent />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
