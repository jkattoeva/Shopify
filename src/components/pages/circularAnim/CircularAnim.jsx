import React from "react";
import scss from "./CircularAnim.module.scss";
const CircularAnim = () => {
  return (
    <div className={scss.circular_text_container}>
      <div className={scss.circular_text}>Your Circular Text Goes Here</div>
    </div>
  );
};

export default CircularAnim;
