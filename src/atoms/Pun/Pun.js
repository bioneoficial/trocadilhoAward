import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import "./Pun.css";

const Pun = ({ puns }) => {
  const [punList, setPunList] = useState(puns);

  const upVote = (index) => {
    const updatedPunList = [...punList];
    updatedPunList[index].votes++;
    setPunList(updatedPunList);
  };

  useEffect(() => {
    localStorage.setItem("puns", JSON.stringify(punList));
  }, [punList]);

  return (
    <tbody className="pun__table-body">
      {punList.map((pun, index) => (
        <tr key={pun.id ?? index} className="pun__table-row">
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
            <Button onClick={() => upVote(pun.id)} classFromProps="button--like" buttonText="deixe seu like!" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Pun;
