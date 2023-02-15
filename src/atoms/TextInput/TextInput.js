import React from "react";
import "./TextInput.css";

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
  required,
  maxLength,
  disabled,
  id,
}) => {
  return (
    <div className="TextInput__container">
      <label className="TextInput_label" htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        className="TextInput__input"
      />
    </div>
  );
};

export default TextInput;
