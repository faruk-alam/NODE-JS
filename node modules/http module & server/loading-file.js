import http from "http"
import fs from "fs/promises"
import url from "url"
import path from "path"

// get current path -
const _filename = url.fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
console.log(_dirname,_filename);
let port = 8080;
let server = http.createServer(async(req,res) => {
    try {
        if(req.method === "GET"){
            let filePath;
            if(req.url === "/"){
            filePath = path.join(_dirname,"files loading","index.html")
            }else if(req.url === "/about"){
                filePath = path.join(_dirname,"files loading","about.html")

            }else{
                throw new Error("File not found");
                
            }       
        } else{
            throw new Error("method not allowed");
            
        }
        const data = await fs.readFile(filePath)
        res.setHeader("Content-Type","text/html")
        res.writeFile(data)
        res.end();
    } catch (error) {
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.end("server error")       

    }
   
});
server.listen(port,() =>{
    console.log("Server running on "+ port)
});
