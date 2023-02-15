import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const onClick = () => navigate("/lista-trocadilho");

  return (
    <div className="welcome">
      <h1 className="welcome__title">VAMOS COMECAR AMIGOS AVALIADORES?</h1>
      <p className="welcome__text">
        IREI FAZER OS ORGANISMOS JUNTOS SEM CSS E COM O PROGRESSO IREI
        COMPONENTIZANDO E ESTILIZANDO.
      </p>
      <p className="welcome__text">
        DEIXEI A ESTRUTURA PRONTA MAS VAI SER TUDO BEM CRU ATE TER O CHECK PRA
        IR REFINANDO.
      </p>
      <button className="welcome__button" onClick={onClick}>
        INICIAR
      </button>
    </div>
  );
};

export default Welcome;
