import React from "react";
import RankingTable from "../../atoms/RankingTable";
import { threeMostVotedPun } from "../../utils/common";
import { BESTPUNTABLEHEAD } from "../../utils/enums";
import "./Ranking.css";

const Ranking = () => {
  const threeMostVotedPunResult = threeMostVotedPun();
  return (
    <>  
    <RankingTable tableHead={BESTPUNTABLEHEAD} tableRowContent={threeMostVotedPunResult} />
    <h2 className="dev-ranking__title"> dev criativo</h2>
    </>
    );
};

export default Ranking;
