var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>This is Node.js starter project.</h1>');
});

app.listen(process.env.PORT || 3000);
