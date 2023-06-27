import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../../../assets/svg/google.svg";
import appleIcon from "../../../../assets/svg/apple.svg";
import scss from "../Auth.module.scss";

const SignUp = () => {
  return (
    <div className={scss.page}>
      <div className={scss.box}>
        <div className={scss.content}>
          <h1 className={scss.title}>Welcome👋</h1>
          <div className={scss.buttons}>
            <button className={scss.button}>
              <img src={googleIcon} alt="google" /> Sign up with Google
            </button>
            <button className={`${scss.button} ${scss.apple}`}>
              <img src={appleIcon} alt="apple" />
              Sign up with Apple
            </button>
          </div>
          <p className={scss.desc}>
            Already have an account?
            <Link to="/signIn" className={scss.link}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
