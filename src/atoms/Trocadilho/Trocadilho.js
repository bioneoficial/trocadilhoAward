import React from "react";
import "./Trocadilho.css";
import LikeButton from "../LikeButton";

const Trocadilho = ({trocadilhos}) => {

  return (
    <>{ trocadilhos && trocadilhos.length > 0 ? trocadilhos.map((trocadilho, index) => (
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
