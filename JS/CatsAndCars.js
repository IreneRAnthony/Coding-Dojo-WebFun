const http = require("http"); // The HTTP library used for responding to web requests
const fs = require("fs"); //the filesystem library needed for reading files
const server = http.createServer(function (request, response){
    console.log("client request URL: ", request.url);
    //for routing
    if(request.url === "/"){
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); // send response body
            response.end(); //finish up
        })
    }
    else if(request.url.startsWith("/trains/img/")) {
        fs.readFile('.' + request.url, function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.end();
        })
    }
    // The request doesn't match anything
    else { 
        response.writeHead(404);
        response.end("File not found.");
    }

});
server.listen(6789); //tell your server which port to run on
//print to terminal window
console.log("Running in localhost at port 6789");