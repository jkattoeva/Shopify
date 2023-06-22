import React from "react";
import scss from "./Category.module.scss";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <div className={scss.postCard}>
      <img src={item.imageUrl} alt={item.title} />
      <div className={scss.post_elements}>
        <h1 className={scss.title}>{item.title}</h1>
        <span className={scss.price}>{item.price}</span>
        <Link className={scss.postBtn} to={`category/${item.id}`}>
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Category;
