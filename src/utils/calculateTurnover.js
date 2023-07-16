const moment = require('moment');

const calculateTurnover = (employees, headcount) => {
  const turnoverByMonth = {};

  const calculateSubordinatesTurnover = (subordinates) => {
    subordinates.forEach((employee) => {
      const { dataRecisao } = employee;
      if (dataRecisao) {
        const monthKey = moment(dataRecisao).format('YYYY-MM');
        if (!turnoverByMonth[monthKey]) {
          turnoverByMonth[monthKey] = 0;
        }
        turnoverByMonth[monthKey]++;
      }

      if (employee.subordinates && employee.subordinates.length > 0) {
        calculateSubordinatesTurnover(employee.subordinates);
      }
    });
  };

  calculateSubordinatesTurnover(employees);

  const turnover = headcount.map(({ month, count }) => ({
    month,
    value: turnoverByMonth[month] ? turnoverByMonth[month] / count : 0,
  }));

  return turnover;
};

module.exports = calculateTurnover;
