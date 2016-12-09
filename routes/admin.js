var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('admin/dashboard.njk');
});

router.get('/login', function(req, res) {
  res.render('admin/login.njk');
});

module.exports = router;