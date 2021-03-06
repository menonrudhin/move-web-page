const accountSid = process.env.sid;
const authToken = process.env.key;
const client = require('twilio')(accountSid, authToken);

//const http = require('http');
console.log('getting started');
const PORT=5000;

var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://move-web-page.herokuapp.com"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  console.log('enable cors');
});

app.use(express.static("public"));

app.get('/', function(req, res, next) {
  console.log(process.env.sid);
  // Handle the get for this route
  res.render('public/index.html');
});

app.get('/ver', function(req, res, next) {
  // Handle the get for this route
  res.send('v0.1');
});

app.post('/', jsonParser, function(req, res, next) {
 // Handle the post for this route
 console.log('post request : ',req.body);
 let message = 'Your ' + req.body.phone + ' order of ' + req.body.course + ' has shipped and should be delivered on ' + req.body.email + '. Details : ' + req.body.name;
 client.messages
       .create({
          body: message,
          from: 'whatsapp:+14155238886',
          //from: 'whatsapp:+918871442826',
          to: 'whatsapp:+918871442826',
          //to: 'whatsapp:+14372464771'
        })
       .then(message => console.log('Response from twilio : ',message))
       .done();
 res.send('DONE OK');
});

app.listen(process.env.PORT || PORT);

module.exports = app;
