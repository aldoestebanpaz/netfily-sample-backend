const express = require('express');
const router = express.Router();
const { articleRouter } = require('./router');

router.use('/articles', articleRouter);

module.exports = router;
