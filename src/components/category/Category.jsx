import React from "react";
import "./Category.css";

const Category = ({ item }) => {
  return (
    <div
      className="postCard"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <h3 className="title">{item.title}</h3>
    </div>
  );
};

export default Category;
