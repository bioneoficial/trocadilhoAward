import React from "react";
import "./Button.css";

const Button = ({ classFromProps, onClick, buttonText }) => {
  return (
    <button className={classFromProps} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
