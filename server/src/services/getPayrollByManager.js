const Payroll = require('../db/Payroll');

async function identifyEmployee(email) {
  const employee = await Payroll.findOne({ where: { email: email } });
  if (!employee) throw new Error(`Email ${email} not found`);
  return employee;
}

async function findEmployeesByManager(email) {
  const user = await identifyEmployee(email);
  const employees = await Payroll.findAll({
    where: { emailGestor: user.emailGestor }
  });
  return employees;
}

module.exports = findEmployeesByManager;