var fs = require('fs');
var http = require('http');

var server = http.createServer((req,res)=>{
// asyc way
    // if(req.url="/"){
    //     fs.readFile('Home.html',(error,data)=>{
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write(data);
    //         res.end();
    //     });
    // }
    
// sync way
    if(req.url="/"){
        let data = fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();
    }
});

server.listen(4040);