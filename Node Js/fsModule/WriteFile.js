var fs = require('fs');
var http = require('http');

var server = http.createServer((req,res)=>{
const url = req.url;
    if(url ==="/"){
        fs.writeFile("demo.txt",'Hello Node Js',(error)=>{
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Failed");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Successfully");
                res.end();
            }
        });
    }

    // sync Way
    // if(url ==="/"){
    //     const error = fs.writeFile("demoSync.txt",'Hello Node Js from sync');
    //         if(error){
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.write("File Write Failed");
    //             res.end();
    //         }
    //         else{
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.write("File Write Successfully");
    //             res.end();
    //         }
    //     }
});

server.listen(4040);