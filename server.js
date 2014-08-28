var http = require("http");
var auth = require("http-auth");

var PORT = 8000;

var basic = auth.basic({
  realm: "Secret area",
  file: "super_secrets",
});

var server = http.createServer(basic, function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("User authenticated successfully");
    response.end();
});
 
server.listen(PORT);
