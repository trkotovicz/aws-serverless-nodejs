const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Payroll = sequelize.define('payroll',
  {
    matricula: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailGestor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataAdmissao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dataRecisao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'payroll',
    underscored: true,
    timestamps: false,
  }
);

module.exports = Payroll;