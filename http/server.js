const http = require('http');

const server = http.createServer((req,res)=> {
    res.end("Hi there server");
}) 
const port = 4000;
server.listen(port,()=> {
    console.log( "Server is listening to port 4000");
})