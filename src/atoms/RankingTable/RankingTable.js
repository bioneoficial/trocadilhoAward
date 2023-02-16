import React from "react";
import "./RankingTable.css";

const RankingTable = ({ tableHead, tableRowContent }) => {
console.log(tableRowContent)
  return (
    <table>
      <thead>
        <tr>
            {tableHead.map((head) => (
                <th key={head}>{head}</th>
            ))}
        </tr>
      </thead>
      <tbody>
         {tableRowContent.map((row, index) => (
            <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.votes}</td>
                <td>{row.dev}</td>
                <td>{row.context}</td>
                <td>{row.message}</td>
            </tr>
        ))} 
      </tbody>
    </table>
  );
};

export default RankingTable;
