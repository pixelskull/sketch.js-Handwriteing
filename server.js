var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/sketch.html');
});

app.get('/style.css', function (req, res) {
  res.sendFile(__dirname + '/style.css');
});

app.get('/sketch.min.js', function (req, res) {
  res.sendFile(__dirname + '/sketch.min.js');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
