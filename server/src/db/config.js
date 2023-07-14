require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
});

module.exports = sequelize;
