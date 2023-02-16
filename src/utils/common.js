
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
