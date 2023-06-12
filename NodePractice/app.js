const http = require('http');

var fs = require('node:fs');

http.createServer(function (req, res) {
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type":"plain/text"});
    res.end("Home Page")
  }
  else if(req.url === '/about'){
    res.writeHead(200, {"Content-Type":"plain/text"});
    res.end("About Page")
  }
  else if(req.url === "/api"){
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({
        firstName : "Ashwani",
        lastName: "Sharma",
        job_role : "Software Engineer"
    }));
  }
  else{
    res.writeHead(404, {"Content-Type":"plain/text"});
    res.end("Page Not Found");
  }
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');