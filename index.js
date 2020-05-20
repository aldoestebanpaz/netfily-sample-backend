require('./config');
require('./config-database');

const express = require('express');
const morgan = require('morgan');
const apiV1Router = require('./src/api/v1');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', apiV1Router);

app.listen(process.env.PORT, () =>
  console.log(`The application is running on port ${process.env.PORT}`));
