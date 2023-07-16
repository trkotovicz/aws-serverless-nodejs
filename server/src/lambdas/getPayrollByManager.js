const findEmployeesByManager = require('../services/getPayrollByManager');

module.exports.handler = async (event) => {
  try {
    const email = event.pathParameters.email;
    const result = await findEmployeesByManager(email);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: result })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};