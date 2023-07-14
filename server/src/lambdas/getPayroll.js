import getPayroll from "../services/getPayroll";
import { StatusCodes } from 'http-status-codes';

module.exports.handler = async (event) => {
  try {
    const result = await getPayroll();
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify({ data: result })
    };

  } catch (error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({ error: error.message })
    };
  }
};
