import React from "react";
import LikeButton from "../LikeButton";

const Pun = ({ puns }) => {
  return (
    <tbody>
      {puns.map((pun, index) => (
        <tr key={index} className="table_row_pun">
          <td className="table_row__data">{pun.date}</td>
          <td className="table_row__data">{pun.votes}</td>
          <td className="table_row__data">{pun.dev}</td>
          <td className="table_row__data">{pun.context}</td>
          <td className="table_row__data">{pun.message}</td>
          <td className="table_row__data">
            <LikeButton />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Pun;
