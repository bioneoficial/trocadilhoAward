export const MostVotedPunList = (puns) => {
  const sortedPuns = puns.sort((a, b) => b.votes - a.votes);
  return sortedPuns;
};

export const mostPunByDev = (puns) => {
  return Object.entries(
    puns.reduce((accumulator, pun) => {
      accumulator[pun.dev] = (accumulator[pun.dev] || 0) + 1;
      return accumulator;
    }, {})
  )
    .map(([dev, punQty]) => ({ dev, punQty }))
    .sort((a, b) => b.punQty - a.punQty);
};

export const formatBrazilianDate = (dateString) => {
  const day = dateString.substring(0, 2);
  const month = dateString.substring(3, 5);
  const year = dateString.substring(6, 10);
  return `${year}-${month}-${day}`;
};

export const dateMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

export const addRank = (arr) => {
  let rank = 1;

  if (arr[0]?.punQty) {
    arr[0].rank = rank;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].punQty !== arr[i - 1].punQty) {
        rank = i + 1;
        if (rank >= 4) break;
        arr[i].rank = rank;
      }
      arr[i].rank = rank;
    }
  } else if (arr[0]?.votes) {
    arr[0].rank = rank;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].votes !== arr[i - 1].votes) {
        rank = i + 1;
        if (rank >= 4) break;
        arr[i].rank = rank;
      }
      arr[i].rank = rank;
    }
  }
  return arr.filter((el) => el.rank !== undefined || el.rank < 4);
};
