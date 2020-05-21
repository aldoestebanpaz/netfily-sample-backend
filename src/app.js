require('./config');
require('./config-database');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const apiV1Router = require('./api/v1');

exports.createExpressApp = (baseUrl) => {

  const app = express();
  app.use(express.json());
  app.use(morgan('dev'));

  app.use((baseUrl || '') + '/api/v1', apiV1Router);

  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  // for SPA routing
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.use((req, res) => {
    res.status(404).send('Not Found');
  });
  app.use((err, req, res) => {
    console.error(err.stack)
    res.status(500).send('Internal Server Error')
  });

  return app;
}