import React, { useState, useEffect } from "react";
import SubmitButton from "../../atoms/SubmitButton";
import TextInput from "../../atoms/TextInput";
import { formatDate } from "../../utils/common";
import { ERRORMESSAGE as errorMessage } from "../../utils/enums";
import "./PunAdd.css";

const PunAdd = () => {
  const [date, setDate] = useState("");
  const [dev, setDev] = useState("");
  const [context, setContext] = useState("");
  const [pun, setPun] = useState("");
  const [required, setRequired] = useState({
    dev: false,
    context: false,
    pun: false,
    ready: false,
  });

  const validateFields = () => {
    const newRequired = {
      dev: dev.length === 0,
      context: context.length === 0,
      pun: pun.length === 0,
      ready: dev.length > 0 && context.length > 0 && pun.length > 0 && date,
    };
    setRequired(newRequired);
    return newRequired.ready;
  };

  const clearFields = () => {
    setDev("");
    setContext("");
    setPun("");
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
      console.log("Form submitted", { date, dev, context, pun });
      clearFields();
    }
  };

  useEffect(() => {
    const today = new Date();
    setDate(formatDate(today));
  }, []);

  return (
    <form className="PunAdd__form" onSubmit={handleSubmit}>
      <div className="PunAdd__inputWrapper">
        <TextInput
          id={"data"}
          title="Data"
          value={date}
          required={required.date}
          className="PunAdd__input"
          disabled={true}
          maxLength={10}
        />
      </div>
      <div className="PunAdd__inputWrapper">
        <TextInput
          id={"dev"}
          title="Dev"
          placeholder="Digite o nome"
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          required={required.dev}
          maxLength={80}
          className="PunAdd__input"
        />
      </div>
      {required.dev && (
        <div className="TextInput__errorMessage">{errorMessage}</div>
      )}
      <div className="PunAdd__inputWrapper">
        <TextInput
          id={"context"}
          title="Contexto"
          placeholder="Digite o contexto"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          required={required.context}
          maxLength={80}
          className="PunAdd__input"
        />
      </div>
      {required.context && (
        <div className="TextInput__errorMessage">{errorMessage}</div>
      )}
      <div className="PunAdd__inputWrapper">
        <TextInput
          id={"pun"}
          title="Trocadilho"
          placeholder="Digite o trocadilho"
          value={pun}
          onChange={(e) => setPun(e.target.value)}
          required={required.pun}
          maxLength={80}
          className="PunAdd__input"
        />
      </div>
      {required.pun && (
        <div className="TextInput__errorMessage">{errorMessage}</div>
      )}
      <SubmitButton />
    </form>
  );
};

export default PunAdd;
