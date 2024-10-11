import { createServer } from "http"
const PORT = 8080;

let users = [
    {id : 1,Name : "Salman khan"},
    {id : 2,Name : "Sohan khan"},
    {id : 3,Name : "Sakib khan"},
]

let server = createServer((req,res) =>{
    if(req.url === "/api/users" && req.method === "GET"){
        res.setHeader("Content-Type","aplication/json")
        res.write(JSON.stringify(users))
        res.end()

     }else{
         res.setHeader("Content-Type","aplication/json")
         res.statusCode = 404;
         res.write(JSON.stringify({massage : "Route not found"}))
         res.end()
 
     }  
    })
server.listen(PORT,()=>{
    console.log("Server running on " + PORT)
})