import React from "react";
import "./Trocadilho.css";
import { TROCADILHOS } from "../../utils/enums";
import LikeButton from "../LikeButton";

const Trocadilho = () => {
  localStorage.setItem('trocadilhos', JSON.stringify(TROCADILHOS));
  const trocadilhosFromStorage = JSON.parse(localStorage.getItem('trocadilhos'));
  return (
    <>{ trocadilhosFromStorage && trocadilhosFromStorage.length > 0 ? trocadilhosFromStorage.map((trocadilho, index) => (
      <tr key={index} className="table_row_trocadilho">
        <td className="table_row__data">{trocadilho.date}</td>
        <td className="table_row__data">{trocadilho.votes}</td>
        <td className="table_row__data">{trocadilho.dev}</td>
        <td className="table_row__data">{trocadilho.context}</td>
        <td className="table_row__data">{trocadilho.message}</td>
        <td className="table_row__data"><LikeButton /></td>
      </tr>
    ))
     : <tr  className="table_row_trocadilho">
     <td className="table_row__data">Lista Vazia</td>
     <td className="table_row__data">Lista Vazia</td>
     <td className="table_row__data">Lista Vazia</td>
     <td className="table_row__data">Lista Vazia</td>
     <td className="table_row__data">Lista Vazia</td>
     <td className="table_row__data">Lista Vazia</td>
   </tr>}
  </>
  );
};

export default Trocadilho;
