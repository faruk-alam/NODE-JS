import http from "http"
let port = 8080;
let server = http.createServer((req,res) => {
    try {
        if(req.method === "GET"){
            if(req.url === "/"){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end("<h1>homepage</h1>")
            
            }else if(req.url === "/about"){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end("<h1>About</h1>")
         
            }else{
                res.writeHead(404,{"Content-Type":"text/html"})
                res.end("<h1>Not Found</h1>")       
            }       
        } else{
            throw new Error("Method not allowed");
            
        }
    } catch (error) {
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end("server error")       

    }
   
});
server.listen(port,() =>{
    console.log("Server running on "+ port)
});
