'use strict';

const sequelize = require('./index');
const DataTypes = require('sequelize');

//schema for Employee
const Employee = sequelize.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  employed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Employee;