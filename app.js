const http = require("http");
const routes = require('./routes'); // custom file
const server = http.createServer(routes);

server.listen(3005);
