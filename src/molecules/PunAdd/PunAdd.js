import React, { useState } from "react";
import SubmitButton from "../../atoms/SubmitButton";
import TextInput from "../../atoms/TextInput";

const PunAdd = () => {
  const [date, setDate] = useState("");
  const [dev, setDev] = useState("");
  const [context, setContext] = useState("");
  const [pun, setPun] = useState("");
  const [required, setRequired] = useState({
    dev: false,
    context: false,
    pun: false,
    date: false,
    ready: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    dev: "",
    context: "",
    pun: "",
  });

  const validateFields = () => {
    setRequired({
      date: !date,
      dev: dev.length === 0,
      context: context.length === 0,
      pun: pun.length === 0,
      ready: dev.length > 0 && context.length > 0 && pun.length > 0 && date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    setErrorMessages({
      dev: required.dev ? "Este campo é obrigatório" : "",
      context: required.context ? "Este campo é obrigatório" : "",
      pun: required.pun ? "Este campo é obrigatório" : "",
    });
    if (required.ready) {
    console.log("Form submitted", { formattedDate, dev, context, pun });
    // Submit the form
    }
    };
    
    return (
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="data">Data</label>
    <input
    type="date"
    id="data"
    name="data"
    required={required.date}
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
    {required.date && (
    <div className="TextInput__errorMessage">Este campo é obrigatório</div>
    )}
    </div>
    <div>
    <TextInput
    id={"dev"}
    title="Dev"
    placeholder="Digite o nome"
    value={dev}
    onChange={(e) => setDev(e.target.value)}
    required={required.dev}
    errorMessage={errorMessages.dev}
    maxLength={80}
    />
    </div>
    {required.dev && (
    <div className="TextInput__errorMessage">Este campo é obrigatório</div>
    )}
    <div>
    <TextInput
    id={"context"}
    title="Contexto"
    placeholder="Digite o contexto"
    value={context}
    onChange={(e) => setContext(e.target.value)}
    required={required.context}
    errorMessage={errorMessages.context}
    maxLength={80}
    />
    </div>
    {required.context && (
    <div className="TextInput__errorMessage">Este campo é obrigatório</div>
    )}
    <div>
    <TextInput
    id={"pun"}
    title="Trocadilho"
    placeholder="Digite o trocadilho"
    value={pun}
    onChange={(e) => setPun(e.target.value)}
    required={required.pun}
    errorMessage={errorMessages.pun}
    maxLength={80}
    />
    </div>
    {required.pun && (
    <div className="TextInput__errorMessage">Este campo é obrigatório</div>
    )}
    <SubmitButton />
    </form>
    );
    };
    
    export default PunAdd;
       