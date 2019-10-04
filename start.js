const http = require('http');
const host = '127.0.0.1';
const port = 3000 ;

const server = http.createServer((req, res) => {
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to node.js</h1>')
}) ;

server.listen(port, host, () => {
    console.log(`Web server ${host} start at port ${port}`)
});