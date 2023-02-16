  
  export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  export const threeMostVotedPun = () => {
    const punsFromStorage = JSON.parse(localStorage.getItem("puns"));
    const sortedPuns = punsFromStorage.sort((a, b) => b.votes - a.votes);
    return sortedPuns.slice(0, 3);
  };

  export const mostPunByDev = (puns) => {
    const punsByDev = puns.reduce((acc, pun) => {
      if (acc[pun.dev]) {
        acc[pun.dev]++;
      } else {
        acc[pun.dev] = 1;
      }
      return acc;
    }, {});
    return Object.keys(punsByDev).reduce((a, b) => punsByDev[a] > punsByDev[b] ? a : b);
  }
