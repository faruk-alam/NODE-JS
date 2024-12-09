import http from "http"
let port = 7000;
let server = http.createServer((req,res) => {
    // res.write("Hello World !")
    // res.setHeader("Content-Type","text/html")
    res.setHeader("Content-Type","text/plain")
    //res.statusCode = 404;
    // res.writeHead(500,{"Content-Type":"application/json"});

    // res.end(JSON.stringify({
    //     message : "server Error"
    // }));
    res.end("Hello Server")
});
server.listen(port,() =>{
    console.log("Server running on " + port)
});


