import React from "react";
import "./TextInput.css";

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
  onBlur,
  errorMessage,
  required,
  maxLength,
  disabled,
  id,
}) => {
  return (
    <div className="TextInput__container">
      <label className="TextInput_label" htmlFor={id}>{title}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
        color={errorMessage ? "#FA5A5A" : "#cccccc"}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        className="TextInput__input"
      />
      {errorMessage && (
        <div className="TextInput__errorMessage">{errorMessage}</div>
      )}
    </div>
  );
};

export default TextInput;
