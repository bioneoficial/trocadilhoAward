import React, { useState } from "react";
import LikeButton from "../LikeButton";
import "./Pun.css";

const Pun = ({ puns }) => {
  const [punList, setPunList] = useState(puns);

  const upVote = (index) => {
    const updatedPunList = [...punList];
    updatedPunList[index].votes++;
    setPunList(updatedPunList);
  };

  return (
    <tbody className="pun__table-body">
      {punList.map((pun) => (
        <tr key={pun.id} className="pun__table-row">
          <td className="pun__table-cell pun__table-cell--date">{pun.date}</td>
          <td className="pun__table-cell pun__table-cell--votes">
            {pun.votes}
          </td>
          <td className="pun__table-cell pun__table-cell--dev">{pun.dev}</td>
          <td className="pun__table-cell pun__table-cell--context">
            {pun.context}
          </td>
          <td className="pun__table-cell pun__table-cell--message">
            {pun.message}
          </td>
          <td className="pun__table-cell pun__table-cell--button">
            <LikeButton onClick={() => upVote(pun.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Pun;
