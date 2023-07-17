const getHeadcount = require('../services/getHeadcount');

module.exports.handler = async (event) => {
  try {
    const email = event.pathParameters.email;
    const headcount = await getHeadcount(email);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ headcount }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};