import React, { useState } from "react";
import LikeButton from "../LikeButton";

const Pun = ({ puns }) => {
  const [punList, setPunList] = useState(puns);

  const upVote = (index) => {
    const updatedPunList = [...punList];
    updatedPunList[index].votes++;
    setPunList(updatedPunList);
  };

  return (
    <tbody>
      {punList.map((pun, index) => (
        <tr key={index} className="table_row_pun">
          <td className="table_row__data">{pun.date}</td>
          <td className="table_row__data">{pun.votes}</td>
          <td className="table_row__data">{pun.dev}</td>
          <td className="table_row__data">{pun.context}</td>
          <td className="table_row__data">{pun.message}</td>
          <td className="table_row__data">
            <LikeButton onClick={() => upVote(index)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Pun;
