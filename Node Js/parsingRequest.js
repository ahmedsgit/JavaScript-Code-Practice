const http = require('http');

const routes = require('./routes');

const Server = http.createServer(routes);

Server.listen(3000);