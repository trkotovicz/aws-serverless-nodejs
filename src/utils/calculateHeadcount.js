const moment = require('moment');

const calculateHeadcount = (employees) => {
  const headcountByMonth = {};

  const calculateSubordinatesHeadcount = (subordinates) => {
    subordinates.forEach((employee) => {
      const { dataAdmissao, dataRecisao } = employee;
      const startOfMonth = moment(dataAdmissao).startOf('month');
      const endOfMonth = moment(dataRecisao || new Date()).endOf('month');

      let month = startOfMonth.clone();
      while (month.isSameOrBefore(endOfMonth, 'month')) {
        const monthKey = month.format('YYYY-MM');
        if (!headcountByMonth[monthKey]) {
          headcountByMonth[monthKey] = 0;
        }
        headcountByMonth[monthKey]++;
        month.add(1, 'month');
      }

      if (employee.subordinates && employee.subordinates.length > 0) {
        calculateSubordinatesHeadcount(employee.subordinates);
      }
    });
  };

  calculateSubordinatesHeadcount(employees);

  const headcount = Object.keys(headcountByMonth).map((month) => ({
    month,
    count: headcountByMonth[month],
  }));

  return headcount;
};

module.exports = calculateHeadcount;
