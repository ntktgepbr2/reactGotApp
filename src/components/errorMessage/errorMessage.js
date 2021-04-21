import React, { Fragment } from "react";
import "./errorMessage.css";
import img from "./error.jpeg";

const ErrorMessage = () => {
  return (
    <Fragment>
      <img src={img} alt="error" />
      <span>Smth gone wrong</span>
    </Fragment>
  );
};

export default ErrorMessage;
