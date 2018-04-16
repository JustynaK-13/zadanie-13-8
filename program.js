var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
    	fs.readFile('./index.html', 'utf-8', function(err, data){
        	response.write('<h1>Hello Client!</h1>');
            response.end();
        });
    } else {
    	fs.readFile('./index.html', 'utf-8', function(err, data){
            response.statusCode = 404;
            response.write('<src=https://images.pexels.com/photos/160739/smilies-bank-sit-rest-160739.jpeg?auto=compress&cs=tinysrgb&h=350>');
            response.end();
    	});
	}
});
server.listen(8080);