import React from "react";
import Pun from "../../atoms/Pun";
import "./PunList.css";
import { PUNS } from "../../utils/enums";

const PunList = () => {

  return (
    <>
      {PUNS && PUNS.length > 0 ? (
        <div>
          <table className="pun-list__table">
            <thead>
              <tr className="pun-list__table__row--head">
                <th className="pun-list__table__row__head__title">Data</th>
                <th className="pun-list__table__row__head__title">Votos</th>
                <th className="pun-list__table__row__head__title">Dev</th>
                <th className="pun-list__table__row__head__title">Contexto</th>
                <th className="pun-list__table__row__head__title">Trocadilho</th>
                <th className="pun-list__table__row__head__title">Votar</th>
              </tr>
            </thead>
              <Pun puns={PUNS} />
          </table>
        </div>
      ) : (
        <h2>Lista Vazia</h2>
      )}
    </>
  );
};

export default PunList;
