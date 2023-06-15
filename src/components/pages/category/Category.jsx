import React from "react";
import scss from "./Category.module.scss";

const Category = ({ item }) => {
  return (
    <div className={scss.postCard}>
      <img src={item.imageUrl} alt={item.title} />
      <div className={scss.post_elements}>
        <h1 className={scss.title}>{item.title}</h1>
        <span className={scss.price}>{item.price}</span>
        <button className={scss.postBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Category;
