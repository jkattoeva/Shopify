import React from "react";
import image from "../../../assets/images/background.webp";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div className={scss.about__page}>
      <div className={scss.container}>
        <div className={scss.text}>
          <h1 className={scss.title}>About us</h1>
          <p className={scss.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ab deserunt blanditiis sint, nam exercitationem aliquid illo neque
            porro, soluta deleniti. Vitae vero in placeat eius quas accusamus
            incidunt asperiores.
          </p>
        </div>
        <div className={scss.images}>
          <div className={scss.image}>
            <img src={image} alt="img" />
          </div>
          <div className={scss.image}>
            <img src={image} alt="img" />
          </div>
          <div className={scss.image}>
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
