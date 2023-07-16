const findEmployeesByManager = require('./getPayrollByManager');
const calculateHeadcount = require('../utils/calculateHeadcount');

module.exports = async (email) => {
  const employees = await findEmployeesByManager(email);
  const headcount = calculateHeadcount(employees);
  return headcount;
};