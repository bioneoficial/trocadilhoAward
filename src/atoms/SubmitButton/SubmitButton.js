import React from "react";
import "./SubmitButton.css";

const SubmitButton = ({ onClick }) => {
  return <button className="submitButton" onClick={onClick}>Adicionar</button>;
};

export default SubmitButton;
