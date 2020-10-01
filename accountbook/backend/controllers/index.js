const express = require('express');
const path = require('path');
const DB = require('../models/database');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/testing', async function (req, res, next) {
  let result = await DB.query('SELECT * FROM testing');
  res.send(JSON.stringify(result[0]));
});

module.exports = router;
