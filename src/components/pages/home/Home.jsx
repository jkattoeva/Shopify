import React from "react";
import Directory from "../directory/Directory";
import { categories } from "../../../data/data";
import HeadContent from "../headContent/HeadContent";
import scss from "../Styles.module.scss";
import CircularAnim from "../circularAnim/CircularAnim";

const Home = () => {
  return (
    <div className={scss.home__page}>
      <HeadContent page="home" />
      <CircularAnim />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
