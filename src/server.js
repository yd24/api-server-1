'use strict';

require('dotenv').config
const express = require('express');
const app = express();
const cors = require('cors');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const logger = require('./middleware/logger');
const jobTitleRouter = require('./routes/job-title');
const employeeRouter = require('./routes/employee');

app.use(cors());
app.use(logger);


app.use('/employee', employeeRouter);
app.use('/job-title', jobTitleRouter);

app.use("*", error404);
app.use(error500);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  }
}
