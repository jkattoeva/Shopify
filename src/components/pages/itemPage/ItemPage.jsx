import React from "react";

const ItemPage = ({ item }) => {
  const { name, description } = item;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default ItemPage;
