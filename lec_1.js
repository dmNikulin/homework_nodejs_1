const http = require('http');
let counterHomePage = 0;
let counterAboutPage = 0;
const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html; charset: utf-8' });
    // res.end('<h1> Hello world </h1>');
    // console.log('запрос получен');


    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset: utf-8' });
        res.end(`<h1> Hello world </h1><a href="./about">About page</a><p>Visitings: ${++counterHomePage}</p>`);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset: utf-8' });
        res.end(`<h1> ABOUT WEB PAGE </h1><a href="/">Home page</a><p>Visitings: ${++counterAboutPage}</p>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset: utf-8' });
        res.end('<h1>404<br>PAGE NOT FOUND</h1>');
    }
});

const port = 3000;

server.listen(port);