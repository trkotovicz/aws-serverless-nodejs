import Payroll from '../db/Payroll';

export default async function getPayroll() {
  try {
    const employeesList = await Payroll.findAll();
    return employeesList;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}