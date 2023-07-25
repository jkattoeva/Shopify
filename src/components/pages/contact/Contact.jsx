import React from "react";
import scss from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={scss.page}>
      <div className={scss.title}>
        <h1>Contact Us Dear Bro 🙌🏻</h1>
      </div>
      <form className={scss.form}>
        <div className={scss.input_wrapper}>
          <span>Your Full Name</span>
          <input className={scss.input} name="name" type="text" />
        </div>
        <div className={scss.input_wrapper}>
          <span>Your Number</span>
          <input className={scss.input} name="name" type="text" />
        </div>
        <div className={scss.input_wrapper}>
          <span>Your Message</span>
          <textarea
            className={scss.input}
            name="name"
            placeholder="type here..."
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
