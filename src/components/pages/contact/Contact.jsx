import React from "react";
import scss from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={scss.page}>
      <input name="name" type="text" />
    </div>
  );
};

export default Contact;
