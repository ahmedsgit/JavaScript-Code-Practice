const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(288, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Home Page</h1>');
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(288, { 'Content-Type': 'text/html' });
        res.write('<h1>This is About Page</h1>');
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(288, { 'Content-Type': 'text/html' });
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    }
    else {
        res.writeHead(288, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not found</h1>');
        res.end();
    }
});

server.listen(5000);
console.log('successful');