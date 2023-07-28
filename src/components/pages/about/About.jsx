import image from "../../../assets/images/background.webp";
import scss from "./About.module.scss";

const About = () => {
  return (
    <div className={scss.about__page}>
      <div className={scss.container}>
        <div className={scss.title}>
          <h1>
            Belive that you find your style Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam dolore sunt provident, dolorum
            iusto amet ipsa autem, fugit quidem mollitia soluta, sapiente illo
            perspiciatis. Quos pariatur dolorem voluptatibus id molestiae?
          </h1>
        </div>
        <div className={scss.scnd_cont}>
          <div className={scss.img_desc}>
            <div className={scss.image}>
              <img src={image} alt="image" />
            </div>
            <div className={scss.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia atque debitis consectetur animi, corporis id laborum
                quae blanditiis assumenda. Distinctio nulla repudiandae
                molestias sunt magni optio harum laborum inventore aliquid.
              </p>
            </div>
          </div>
          <div className={scss.img_desc}>
            <div className={scss.image}>
              <img src={image} alt="image" />
            </div>
            <div className={scss.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia atque debitis consectetur animi, corporis id laborum
                quae blanditiis assumenda. Distinctio nulla repudiandae
                molestias sunt magni optio harum laborum inventore aliquid.
              </p>
            </div>
          </div>
          <div className={scss.img_desc}>
            <div className={scss.image}>
              <img src={image} alt="image" />
            </div>
            <div className={scss.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia atque debitis consectetur animi, corporis id laborum
                quae blanditiis assumenda. Distinctio nulla repudiandae
                molestias sunt magni optio harum laborum inventore aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
