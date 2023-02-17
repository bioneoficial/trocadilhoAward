import React from "react";
import DevTable from "../../atoms/DevTable/index";
import RankingTable from "../../atoms/RankingTable/index";
import { threeMostVotedPun, mostPunByDev } from "../../utils/common";
import { BESTPUNTABLEHEAD, DEVBYPUNS } from "../../utils/enums";
import "./Ranking.css";

const Ranking = () => {
  const puns = JSON.parse(localStorage.getItem("puns"));
  const threeMostVotedPunResult = threeMostVotedPun(puns);
  const mostPunByDevResult = mostPunByDev(puns);
  return (
    <>
      <RankingTable
        tableHead={BESTPUNTABLEHEAD}
        tableRowContent={threeMostVotedPunResult}
      />
      <h2 className="dev-ranking__title"> dev criativo</h2>
      <DevTable tableHead={DEVBYPUNS} tableRowContent={mostPunByDevResult} />
    </>
  );
};

export default Ranking;
