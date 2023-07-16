const moment = require('moment');

const calculateTurnover = (employees, headcount) => {
  const turnoverByMonth = {};

  employees.forEach((employee) => {
    const { dataRecisao } = employee;
    if (dataRecisao) {
      const monthKey = moment(dataRecisao).format('YYYY-MM');
      if (!turnoverByMonth[monthKey]) {
        turnoverByMonth[monthKey] = 0;
      }
      turnoverByMonth[monthKey]++;
    }
  });

  const turnover = headcount.map(({ month, count }) => ({
    month,
    value: turnoverByMonth[month] ? turnoverByMonth[month] / count : 0,
  }));

  return turnover;
};

module.exports = calculateTurnover;
