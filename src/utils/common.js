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
  return Object.keys(punsByDev).reduce((a, b) =>
    punsByDev[a] > punsByDev[b] ? a : b
  );
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
