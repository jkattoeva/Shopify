import React from "react";
import walp from "../../../assets/images/heyheyhey.jpg";
import walpVercage from "../../../assets/images/joji.jpg";
import scss from "./HeadContent.module.scss";

const HeadContent = () => {
  return (
    <div className={scss.head__content}>
      <div className={scss.container}>
        <div className={scss.text__content}>
          <p>Have a nice joy with us</p>
        </div>
        <div className={scss.images}>
          <div className={scss.image}>
            <img src={walpVercage} alt="walp" />
          </div>
          <div className={scss.image}>
            <img src={walp} alt="walp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
