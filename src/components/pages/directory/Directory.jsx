import React from "react";
import Category from "../category/Category";
import scss from "./Directory.module.scss";

const Directory = ({ categories }) => {
  return (
    <div className="container">
      <div className={scss.postCards}>
        {categories.map((item, i) => (
          <div key={i + 1}>
            <Category item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
