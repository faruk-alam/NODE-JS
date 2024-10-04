// install postman extension on vs code.
// sign in postman.
// New htttp Request


import http from "http"
let port = 8080;
let server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h1>Hello Server</h1>")
    console.log(req.method)
    console.log(req.url)

});
server.listen(port,() =>{
    console.log("Server running on "+ port)
});
