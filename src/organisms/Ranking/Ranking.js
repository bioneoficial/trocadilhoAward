import React from "react";
import DevTable from "../../atoms/DevTable/index";
import RankingTable from "../../atoms/RankingTable/index";
import { MostVotedPunList, mostPunByDev, addRank } from "../../utils/common";
import { BESTPUNTABLEHEAD, DEVBYPUNS } from "../../utils/enums";
import "./Ranking.css";

const Ranking = () => {
  const puns = JSON.parse(localStorage.getItem("puns"));
  const rankedPuns = addRank(mostPunByDev(puns));
  const rankedDevs = addRank(MostVotedPunList(puns));

  return (
    <>
      <RankingTable tableHead={BESTPUNTABLEHEAD} tableRowContent={rankedDevs} />
      <h2 className="dev-ranking__title"> dev criativo</h2>
      <DevTable tableHead={DEVBYPUNS} tableRowContent={rankedPuns} />
    </>
  );
};

export default Ranking;
