import React from "react";
import "./RankingTable.css";

const RankingTable = ({ tableHead, tableRowContent }) => {
  const pos = ["gold", "silver", "bronze"];
  return (
    <React.Fragment>
      {!tableRowContent || tableRowContent.length === 0 ? (
        <h2 className="ranking-empty-message">
          Tabela de Ranking de trocadilhos vazia.
        </h2>
      ) : (
        <table className="ranking-table" aria-label="Ranking Table">
          <thead>
            <tr className="ranking-table__row">
              {tableHead.map((head) => (
                <th className="ranking-table__header" key={head}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRowContent.map((row, index) => (
              <tr className="ranking-table__row" key={row.id}>
                <td
                  className={`ranking-table__cell ranking-table__cell--rank-${
                    pos[row.rank - 1]
                  }`}
                >
                  {row.rank}
                </td>
                <td className="ranking-table__cell ranking-table__cell--votes">
                  {row.votes}
                </td>
                <td className="ranking-table__cell ranking-table__cell--dev">
                  {row.dev}
                </td>
                <td className="ranking-table__cell ranking-table__cell--context">
                  {row.context}
                </td>
                <td className="ranking-table__cell ranking-table__cell--message">
                  {row.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default RankingTable;
