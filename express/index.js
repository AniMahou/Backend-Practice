const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.send("Hi");
})
app.get("/products", (req,res)=>{
    res.end("Products page")
})
app.get("/products/:id", (req,res) => {
    const product = [
        {
            id: 1,
            name: "tabib",
            roll: "230042131",
        },
        {
            id: 2,
            name: "nafis",
            roll: "230042150",
        },
    ]
    const id = parseInt(req.params.id);
    const singleProduct = product.find((product)=>{
        product.id===id
    })
    if(singleProduct){
        res.json(singleProduct)
    }
})
const port = 4000;

app.listen(port, ()=> {
    console.log("Port is running")
})

app.use((err,req,res,next)=>{
    try{

    }catch(error){
        console.log("An error has been detected")
    }
})