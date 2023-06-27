import React from "react";
import scss from "./ItemPage.module.scss";
const ItemPage = ({ item }) => {
  const { name, description } = item;

  return (
    <div className={scss.itemPage}>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default ItemPage;
