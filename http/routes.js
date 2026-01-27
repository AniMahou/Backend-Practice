const http = require ('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    if (url==='/'){
        res.end("Home");
    }
    if (url==='/contact'){
        res.end("contact");
    }
    if (url==='/about'){
        res.end("about");
    }
})
const port = 4001;
server.listen(port, ()=> {
    console.log ("Listening to port")
})