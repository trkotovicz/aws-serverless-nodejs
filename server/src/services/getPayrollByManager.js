const getPayroll = require('./getPayroll');

const findEmployeesByManager = async (email) => {
  const employees = await getPayroll();

  const buildHierarchy = (employees, managerEmail) => {
    const subordinates = employees.filter((employee) => employee.emailGestor === managerEmail);
    for (const subordinate of subordinates) {
      subordinate.subordinates = buildHierarchy(employees, subordinate.email);
    }
    return subordinates;
  };

  const topLevelEmployees = employees.filter((employee) => employee.emailGestor === email);
  for (const employee of topLevelEmployees) {
    employee.subordinates = buildHierarchy(employees, employee.email);
  }

  return topLevelEmployees;
};

module.exports = findEmployeesByManager;