// import Component from "./Component";

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req:any, res:any) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let test:string = 'toto';

    res.end(test);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});