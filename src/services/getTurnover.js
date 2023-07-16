const findEmployeesByManager = require('./getPayrollByManager');
const calculateHeadcount = require('../utils/calculateHeadcount');
const calculateTurnover = require('../utils/calculateTurnover');

module.exports = async (email) => {
  const employees = await findEmployeesByManager(email);
  const headcount = calculateHeadcount(employees);
  const turnover = calculateTurnover(employees, headcount);
  return turnover;
};