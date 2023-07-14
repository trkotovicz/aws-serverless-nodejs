const Payroll = require('../db/Payroll');

async function getPayroll() {
  try {
    const employeesList = await Payroll.findAll();
    return employeesList;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw new Error(`Error fetching payroll: ${error.message}`);
  }
}

module.exports = getPayroll;