'use strict';

const sequelize = require('./index');
const DataTypes = require('sequelize');

//schema for JobTitle
const JobTitle = sequelize.define("Job Title", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perks: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = JobTitle;