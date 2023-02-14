import React from "react";
import Trocadilho from "../../atoms/Trocadilho";
import "./TrocadilhoList.css";
import { TROCADILHOS } from "../../utils/enums";

const TrocadilhoList = () => {
  localStorage.setItem('trocadilhos', JSON.stringify(TROCADILHOS));
  const trocadilhosFromStorage = JSON.parse(localStorage.getItem('trocadilhos'));
  return (
    <div className="container">
      <table className="container__table">
        <thead>
        <tr className="table__row__head">
          <th className="table_row__head_title">Data</th>
          <th className="table_row__head_title">Votos</th>
          <th className="table_row__head_title">Dev</th>
          <th className="table_row__head_title">Contexto</th>
          <th className="table_row__head_title">Trocadilho</th>
          <th className="table_row__head_title">Votar</th>
        </tr>
        </thead>
        <tbody>
       <Trocadilho trocadilhos={trocadilhosFromStorage}/>
       </tbody>
      </table>
    </div>
  );
};

export default TrocadilhoList;
