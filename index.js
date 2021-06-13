const http = require('http');
console.log('getting started');
const PORT=5000;
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
    } /*else {
      console.log('request not identified !');
    }*/
    else {
      res.render('index.html');
    }
});
server.listen($PORT);
