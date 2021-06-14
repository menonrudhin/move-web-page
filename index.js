const http = require('http');
console.log('getting started');
const PORT=5000;

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors({
  origin: 'https://menonrudhin.github.io'
}));

const server = http.createServer((req, res) => {
      console.log('sid is  = ' , process.env.sid);

      let body='';
      if (req.method === 'POST') {
        req.on('data', chunk => {
          body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
          console.log(body);
          res.end('ok');
        });
    } else {
      console.log('request not identified !');
    }/*
    else {
	const express = require('express')
	const path = require('path')
	const PORT = process.env.PORT || 5000

	express()
	  .use(express.static(path.join(__dirname, 'public')))
	  .set('views', path.join(__dirname, 'views'))
	  .set('view engine', 'ejs')
	  .get('/', (req, res) => res.render('pages/index'))
	  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
    }*/
});
server.listen(process.env.PORT || PORT);
