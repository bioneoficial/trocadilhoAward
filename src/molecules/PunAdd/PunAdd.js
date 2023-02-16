import React, { useState } from "react";
import TextInput from "../../atoms/TextInput";
import { ERRORMESSAGE as errorMessage } from "../../utils/enums";
import { formatBrazilianDate, dateMask } from "../../utils/common";
import "./PunAdd.css";
import Button from "../../atoms/Button";

const PunAdd = () => {
  const [date, setDate] = useState("");
  const [dev, setDev] = useState("");
  const [context, setContext] = useState("");
  const [pun, setPun] = useState("");
  const [dateError, setDateError] = useState("");
  const [required, setRequired] = useState({
    dev: false,
    context: false,
    pun: false,
    ready: false,
  });

  const validateFields = () => {
    const newRequired = {
      date: date.length !== 10,
      dev: dev.length === 0,
      context: context.length === 0,
      pun: pun.length === 0,
      ready:
        dev.length > 0 &&
        context.length > 0 &&
        pun.length > 0 &&
        date.length === 10,
    };
    setRequired(newRequired);
    return newRequired.ready;
  };

  const clearFields = () => {
    setDev("");
    setContext("");
    setPun("");
    setDate("");
    setDateError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      const puns = JSON.parse(window.localStorage.getItem("puns")) || [];
      const length = puns.length;
      const newPun = {
        id: String(length),
        date: date,
        votes: 0,
        dev: dev,
        context: context,
        message: pun,
      };
      puns.push(newPun);
      window.localStorage.setItem("puns", JSON.stringify(puns));
      clearFields();
    }
  };

  const validateDate = (inputDate, dateString) => {
    const today = new Date();
    const day = parseInt(dateString.substring(0, 2));
    const month = parseInt(dateString.substring(3, 5));
    const year = parseInt(dateString.substring(6, 10));
    const maxDaysLeapYear = new Date(year, 2, 0).getDate();
    if (
      isNaN(inputDate.getTime()) ||
      inputDate.getTime() > today.getTime() ||
      (month === 2 && day > maxDaysLeapYear)
    ) {
      console.error("Invalid date:", dateString);
      setDateError("Data inválida");
      setDate("");
      return false;
    }
    setDateError("");
    return true;
  };

  const handleChangeDate = (value) => {
    const newValue = dateMask(value);

    if (newValue.length === 10) {
      const inputDate = new Date(formatBrazilianDate(newValue));
      if (!validateDate(inputDate, newValue)) {
        return;
      }
    }

    setDate(newValue);
  };

  return (
    <form className="pun-add__form" role={"form"}>
      <div className="pun-add__inputWrapper">
        <TextInput
          id={"data"}
          title="Data"
          placeholder="dd/mm/aaaa"
          value={date}
          required={required.date}
          onChange={(e) => handleChangeDate(e.target.value)}
          className="pun-add__input"
          maxLength={10}
        />
      </div>
      {required.date && (
        <div className="text-input__errorMessage">{errorMessage}</div>
      )}
      {dateError && <div className="text-input__errorMessage">{dateError}</div>}
      <div className="pun-add__inputWrapper">
        <TextInput
          id={"dev"}
          title="Dev"
          placeholder="Digite o nome"
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          required={required.dev}
          maxLength={80}
          className="pun-add__input"
        />
      </div>
      {required.dev && (
        <div className="text-input__errorMessage">{errorMessage}</div>
      )}
      <div className="pun-add__inputWrapper">
        <TextInput
          id={"context"}
          title="Contexto"
          placeholder="Digite o contexto"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          required={required.context}
          maxLength={80}
          className="pun-add__input"
        />
      </div>
      {required.context && (
        <div className="text-input__errorMessage">{errorMessage}</div>
      )}
      <div className="pun-add__inputWrapper">
        <TextInput
          id={"pun"}
          title="Trocadilho"
          placeholder="Digite o trocadilho"
          value={pun}
          onChange={(e) => setPun(e.target.value)}
          required={required.pun}
          maxLength={80}
          className="pun-add__input"
        />
      </div>
      {required.pun && (
        <div className="text-input__errorMessage">{errorMessage}</div>
      )}
      <Button
        onClick={handleSubmit}
        buttonText="Adicionar"
        classFromProps="button--submit"
      />
    </form>
  );
};

export default PunAdd;
