const express = require('express');
const router = express.Router();
const { articleRouter } = require('./router');

router.use('/articles', articleRouter);

router.get('/env_vars', (req, res) => {
  res.json(process.env);
})

module.exports = router;
