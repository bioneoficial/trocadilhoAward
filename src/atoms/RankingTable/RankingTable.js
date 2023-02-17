import React from "react";
import "./RankingTable.css";

const RankingTable = ({ tableHead, tableRowContent }) => {
  if (!tableRowContent || tableRowContent.length === 0) {
    return <h2 className="ranking-empty">No items to display.</h2>;
  }

  const pos = ["gold", "silver", "bronze"];
  return (
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
              className={`ranking-table__cell ranking-table__cell--rank-${pos[index]}`}
            >
              {index + 1}
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
  );
};

export default RankingTable;
