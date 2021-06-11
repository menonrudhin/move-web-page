const http = require('http');

const server = http.createServer((req, res) => {
      console.log(process.env.sid);
      
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
    }
    /*else {
      res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
      `);
    }*/
});
server.listen(3000);