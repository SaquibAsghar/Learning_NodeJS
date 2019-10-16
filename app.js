const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	if(url === '/form'){
		res.write("<html>");
		res.write("<head><title>My first form</title></head>");
		res.write('<body><h1>Form</h1><form action="/formMessage" method = "POST" ><input type="text" name="userInput" /><button type ="submit" >click me</button></form></body>');
		res.write("</html>");
		return res.end();
	}


	res.setHeader("Content-type", "text/html"); // setting the header
	res.write("<html>");
	res.write("<head><title>My first title from response</title></head>");
	res.write("<body><h1>Hello from Node.js server </h1></body>");
	res.write("</html>");
	res.end(); // to tell the node we are done setting the response :)
    // process.exit();
});

server.listen(3005);
