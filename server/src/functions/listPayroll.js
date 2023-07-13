const dataPromise = require("../utils/payrollData");

module.exports.handler = async (event) => {
  try {
    const result = await dataPromise;

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
