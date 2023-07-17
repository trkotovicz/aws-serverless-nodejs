const getTurnover = require('../services/getTurnover');

module.exports.handler = async (event) => {
  try {
    const email = event.pathParameters.email;
    const turnover = await getTurnover(email);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ turnover }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};