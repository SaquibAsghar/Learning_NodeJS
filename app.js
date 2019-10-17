const http = require("http");
const routes = require('./routes'); // custom file
console.log(routes.someText);
const server = http.createServer(routes.reqHandler);

server.listen(3005);
