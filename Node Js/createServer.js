// Create Server 
// core modules: http,https,fs,path,os,url,querystring,util

const http = require('http');


const Server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); //request
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node js</title></head>');
    res.write('<body><h1>Hello from Node js</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
});

Server.listen(3001);