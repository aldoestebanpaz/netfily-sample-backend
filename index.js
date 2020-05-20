require('./config');
require('./config-database');

const express = require('express');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const morgan = require('morgan');
const apiV1Router = require('./src/api/v1');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', apiV1Router);
app.use('/explorer', serveIndex(__dirname, { hidden: true, view: 'details', icons: true }));
app.use('/explorer', serveStatic(__dirname, { index: false, dotfiles: 'allow' }));

app.listen(process.env.PORT, () =>
  console.log(`The application is running on port ${process.env.PORT}`));
