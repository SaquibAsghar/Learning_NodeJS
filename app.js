const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	res.setHeader("Content-type", "text/html"); // setting the header
	res.write("<html>");
	res.write("<head><title>My first title from response</title></head>");
	res.write("<body><h1>Hello from Node.js server </h1></body>");
	res.write("</html>");
	res.end(); // to tell the node we are done setting the response :)
    // process.exit();
});

server.listen(3005);
