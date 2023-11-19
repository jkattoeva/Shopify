import React from "react";
import scss from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import logo from "../../../assets/svg/logo.svg";

const bannedWords = ["fuck", "dump", "stupid", "fucking", "dummy"];

const hasBannedWords = (value) => {
  const words = value.split(/\s+/);
  return words.some((word) => bannedWords.includes(word.toLowerCase()));
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={scss.page}>
      <div className={scss.container}>
        <div className={scss.form_content}>
          <div className={scss.title}>
            <h1>Contact Us Dear Bro 🙌🏻</h1>
          </div>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className={scss.form}
          >
            <div className={scss.input_wrapper}>
              <span>Your Full Name</span>
              <input
                {...register("fullname", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                })}
                className={scss.input}
                name="fullname"
                type="text"
              />
              {errors.fullname && (
                <span>
                  This field is required and should be between 5 and 50
                  characters.
                </span>
              )}
            </div>
            <div className={scss.input_wrapper}>
              <span>Your Number</span>
              <input
                {...register("number", { required: true })}
                className={scss.input}
                name="number"
                type="text"
              />
              {errors.number && (
                <span>This field is required full phone number.</span>
              )}
            </div>
            <div className={scss.input_wrapper}>
              <span>Your Message</span>
              <textarea
                {...register("message", {
                  required: true,
                  validate: (value) => !hasBannedWords(value),
                })}
                className={scss.input}
                name="message"
                placeholder="type here..."
                type="text"
              />
              {errors.message?.type === "required" && (
                <span>This field is required.</span>
              )}
              {errors.message?.type === "validate" && (
                <span>Message contains bad words.</span>
              )}
            </div>
            <button className={scss.btn} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className={scss.inf_content}>
          <div className={scss.title}>
            <h1>Our Contact Infromation</h1>
          </div>
          <div className={scss.inf}>
            <p>
              Bishkek , Kyrgystan <br />
              Lorem ipsum dolor sit amet consectetur adipisicing eli
            </p>
            <p>Call us : 9999999999999</p>
            <p>
              We are open from Monday - Friday <br />
              8:00 am - 10:00 pm
            </p>
            <span>Folow us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
