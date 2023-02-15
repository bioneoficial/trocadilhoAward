import React from "react";
import Pun from "../../atoms/Pun";
import "./PunList.css";
import { PUNS } from "../../utils/enums";

const PunList = () => {
  if(!localStorage.getItem("puns")){
    localStorage.setItem("puns", JSON.stringify(PUNS));
  }
  const punsFromStorage = JSON.parse(localStorage.getItem("puns"));
  return (
    <>
      {punsFromStorage && punsFromStorage.length > 0 ? (
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
              <Pun puns={punsFromStorage} />
          </table>
        </div>
      ) : (
        <h2>Lista Vazia</h2>
      )}
    </>
  );
};

export default PunList;
