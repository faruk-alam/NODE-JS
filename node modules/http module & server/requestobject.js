import http from "http"
let port = 500;
let server = http.createServer((req,res) => {
    //res.write("Hello World !")
    res.setHeader("Content-Type","text/plain")
    res.writeHead(500,{"Content-Type":"application/json"});
    //res.statusCode = 404;

    // res.end(JSON.stringify({
    //     message : "server Error"
    // }));
    console.log(req.method)
    console.log(req.url)
    res.end("Hello Server")
});
server.listen(port,() =>{
    console.log("Server running on "+ port)
});
