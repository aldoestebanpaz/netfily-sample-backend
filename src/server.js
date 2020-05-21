const app = require('./app').createExpressApp();

app.listen(process.env.PORT, () =>
  console.log(`The application is running on port ${process.env.PORT}`));
