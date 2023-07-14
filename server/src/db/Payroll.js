const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Payroll = sequelize.define('payroll', {
  matricula: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  managerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admissionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rescissionDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Payroll;