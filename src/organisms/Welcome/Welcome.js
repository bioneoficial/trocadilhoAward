import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const onClick = () => navigate("/lista-trocadilho");

  return (
    <div className="container">
      <h1>VAMOS COMECAR AMIGOS AVALIADORES?</h1>
      <p>
        {" "}
        IREI FAZER OS ORGANISMOS JUNTOS SEM CSS E COM O PROGRESSO IREI
        COMPONENTIZANDO E ESTILIZANDO.
      </p>
      <p>
        DEIXEI A ESTRUTURA PRONTA MAS VAI SER TUDO BEM CRU ATE TER O CHECK PRA
        IR REFINANDO.
      </p>
      <button onClick={onClick}>INICIAR</button>
    </div>
  );
};

export default Welcome;
