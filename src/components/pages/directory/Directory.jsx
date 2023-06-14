import React from "react";
import Category from "../category/Category";
import "./Directory.css";

const Directory = ({ categories }) => {
  return (
    <div className="container">
      <div className="postCards">
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
