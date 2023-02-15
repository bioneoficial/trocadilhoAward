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
      {PUNS && PUNS.length > 0 ? (
        <div>
          <table className="pun-list__table">
            <thead>
              <tr className="pun-list__table__row--head">
                <th className="pun-list__table__row__head__title">data</th>
                <th className="pun-list__table__row__head__title">votos</th>
                <th className="pun-list__table__row__head__title">dev</th>
                <th className="pun-list__table__row__head__title">contexto</th>
                <th className="pun-list__table__row__head__title">trocadilho</th>
                <th className="pun-list__table__row__head__title">votar</th>
              </tr>
            </thead>
              <Pun puns={punsFromStorage} />
          </table>
        </div>
      ) : (
        <h2 className="pum-list__empy-message">lista vazia</h2>
      )}
    </>
  );
};

export default PunList;
