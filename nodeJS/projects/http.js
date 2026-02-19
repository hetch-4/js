const http = require('http');

const myServer = http.createServer((req, res)=>{
  res.end('Hello Mahima, this is your first HTTP server');
});
myServer.listen(3000, ()=>{
  console.log('server running on port 3000');
});
