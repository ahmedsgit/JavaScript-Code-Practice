const http = require('http');
const fs = require('fs');

const Server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            console.log(data);
            body.push(data);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, error => {
                res.writeHead(302, {
                    'Location': '/'
                });
                return res.end();
            });
        });
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node js</title></head>');
    res.write('<body><h1>Hello from Node js</h1></body>');
    res.write('</html>');
    res.end();
});

Server.listen(3000);