import React from "react";
import Trocadilho from "../../atoms/Trocadilho";
import "./TrocadilhoList.css";

const TrocadilhoList = () => {

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
       <Trocadilho />
       </tbody>
      </table>
    </div>
  );
};

export default TrocadilhoList;