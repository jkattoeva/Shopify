import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../../assets/svg/cart.svg";
import scss from "./Category.module.scss";

const Category = ({ item }) => {
  return (
    <div className={scss.postCard}>
      <div className={scss.img_wrapper}>
        <Link to={`category/${item.id}`}>
          <img src={item.imageUrl} alt={item.title} />
        </Link>
      </div>
      <div className={scss.post_elements}>
        <div className={scss.data}>
          <h1 className={scss.title}>{item.title}</h1>
          <div className={scss.price}>
            <span>{item.price}</span>
          </div>
          <p className={scss.desc}>{item.description}</p>
        </div>
        <Link className={scss.postBtn} to={`category/${item.id}`}>
          <img src={cartIcon} alt="cartIcon" />
          <span>Add To Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Category;
