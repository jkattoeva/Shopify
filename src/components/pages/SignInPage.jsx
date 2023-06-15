import React from "react";
import scss from "./Styles.module.scss";

const SignInPage = () => {
  return (
    <div className={scss.page}>
      <img
        className={scss.form}
        src="https://i.pinimg.com/236x/8d/77/b9/8d77b957b59380a251ddca519c70b300.jpg"
        alt="signin"
      />
    </div>
  );
};

export default SignInPage;
