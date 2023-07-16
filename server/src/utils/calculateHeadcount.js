const moment = require('moment');

const calculateHeadcount = (employees) => {
  const headcountByMonth = {};

  employees.forEach((employee) => {
    const { dataAdmissao, dataRecisao } = employee;
    const startOfMonth = moment(dataAdmissao).startOf('month');
    const endOfMonth = moment(dataRecisao || new Date()).endOf('month');

    let month = startOfMonth;
    while (month.isSameOrBefore(endOfMonth, 'month')) {
      const monthKey = month.format('YYYY-MM');
      if (!headcountByMonth[monthKey]) {
        headcountByMonth[monthKey] = [];
      }
      headcountByMonth[monthKey].push(employee);
      month.add(1, 'month');
    }
  });

  const headcount = Object.keys(headcountByMonth).map((month) => ({
    month,
    count: headcountByMonth[month].length,
  }));

  return headcount;
};

module.exports = calculateHeadcount;
