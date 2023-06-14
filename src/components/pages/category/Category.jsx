import React from "react";
import "./Category.css";

const Category = ({ item }) => {
  return (
    <div className="postCard">
      <img src={item.imageUrl} alt={item.title} />
      <div className="post_elements">
        <h1>{item.title}</h1>
        <span className="price">{item.price}</span>
        <button className="postBtn">Add To Cart</button>
      </div>
    </div>
  );
};

export default Category;
