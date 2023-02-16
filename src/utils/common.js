export const threeMostVotedPun = (puns) => {
  const sortedPuns = puns.sort((a, b) => b.votes - a.votes);
  return sortedPuns.slice(0, 3);
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
