import React from "react";
import "./DevTable.css";

const DevTable = ({ tableHead, tableRowContent }) => {
  const pos = ["gold", "silver", "bronze"];
  console.log(tableRowContent);
  return (
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
        {tableRowContent.map((row, index) => (
          <tr className="dev-table__row" key={index}>
            <td
              className={`dev-table__cell dev-table__cell--rank-${pos[index]}`}
            >
              {index + 1}
            </td>
            <td className="dev-table__cell dev-table__cell--punQty">
              {row.punQty}
            </td>
            <td className="dev-table__cell dev-table__cell--dev">{row.dev}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DevTable;
