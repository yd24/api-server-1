'use strict';

const sequelize = require('./src/models/index');
const Employee = require('./src/models/employee');
const JobTitle = require('./src/models/job-title');

sequelize.sync().then(async () => {
  let newEmployee = await Employee.create({
    name: "Test",
    age: 30,
    employed: true
  })

  let newTitle = await JobTitle.create({
    title: "CEO",
    perks: "Free coffee",
    salary: 500000
  })

}).catch(error => console.log(error));

