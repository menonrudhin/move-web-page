//const http = require('http');
console.log('getting started');
const PORT=5000;

var express = require('express');
var cors = require('cors');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  console.log('enable cors');
});

app.use(express.static("public"));

app.get('/', function(req, res, next) {
  // Handle the get for this route
  res.render('public/index.html');
});

app.get('/ver', function(req, res, next) {
  // Handle the get for this route
  res.send('v0.1');
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
 console.log('post request');
});

app.listen(process.env.PORT || PORT);

module.exports = app;
