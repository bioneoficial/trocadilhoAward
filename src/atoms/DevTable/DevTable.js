import React from "react";
import "./DevTable.css";

const DevTable = ({ tableHead, tableRowContent }) => {
  const pos = ["gold", "silver", "bronze"];
  console.log(tableRowContent);
  return (
    <table className="ranking-table">
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
          <tr className="ranking-table__row" key={index}>
            <td
              className={`ranking-table__cell ranking-table__cell--rank-${pos[index]}`}
            >
              {index + 1}
            </td>
            <td className="ranking-table__cell ranking-table__cell--punQty">
              {row.punQty}
            </td>
            <td className="ranking-table__cell ranking-table__cell--dev">
              {row.dev}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DevTable;
