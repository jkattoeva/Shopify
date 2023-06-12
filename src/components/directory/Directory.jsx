import React from "react";
import Category from "../category/Category";
import "./Directory.css";

const Directory = ({ categories }) => {
  return (
    <div className="postCards_container">
      {categories.map((item, i) => (
        <div key={i + 1}>
          <Category item={item} />
        </div>
      ))}
    </div>
  );
};

export default Directory;
