import React from "react";
import "./DevTable.css";

const DevTable = ({ tableHead, tableRowContent }) => {
  const pos = ["gold", "silver", "bronze"];
  return (
    <React.Fragment>
      {!tableRowContent || tableRowContent.length === 0 ? (
        <h2 className="dev-empty-message">Tabela de Ranking de Devs vazia.</h2>
      ) : (
        <table className="dev-table">
          <thead>
            <tr className="dev-table__row">
              {tableHead.map((head) => (
                <th className="dev-table__header" key={head}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRowContent.map((row) => (
              <tr className="dev-table__row" key={row.dev}>
                <td
                  className={`dev-table__cell dev-table__cell--rank-${
                    pos[row.rank - 1]
                  }`}
                >
                  {row.rank}
                </td>
                <td className="dev-table__cell dev-table__cell--punQty">
                  {row.punQty}
                </td>
                <td className="dev-table__cell dev-table__cell--dev">
                  {row.dev}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default DevTable;
