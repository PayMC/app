var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var path = require("path");
var fs = require("fs");

//Routes
var store = require("./routes/store");
var admin = require("./routes/admin");

var themeDir = __dirname + '/themes/default/';

nunjucks.configure(path.join(themeDir, 'views'), {
  autoescape: true,
  express: app
});

app.use('/', store);
app.use('/admin', admin);

app.use('/public', express.static('public'));

app.listen(3000, "0.0.0.0");
