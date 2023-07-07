export const giveMeTheDate = (isYearFirst) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  if (isYearFirst) {
    if (month < 10 && day < 10) {
      return `${year}-0${month}-0${day}`;
    } else if (month < 10) {
      return `${year}-0${month}-${day}`;
    } else if (day < 10) {
      return `${year}-${month}-0${day}`;
    }
    return `${year}-${month}-${day}`;
  } else {
    if (month < 10 && day < 10) {
      return `0${day}-0${month}-${year}`;
    } else if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else if (day < 10) {
      return `0${day}-${month}-${year}`;
    }
    return `0${day}-0${month}-${year}`;
  }
};

export const changeYearForDaysOrder = (dateString) => {
  const year = dateString.slice(0, 4);
  const month = dateString.slice(5, 7);
  const day = dateString.slice(8, 10);
  return `${day}-${month}-${year}`;
};
