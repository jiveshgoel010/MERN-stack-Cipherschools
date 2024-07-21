const express = require("express");

const app = express();


app.get('/', (req,res)=>{
    res.send("hello");
})

app.get("/add",(req,res)=>{
    let {a: first, b:second} = req.query;
    let sum = parseInt(first)+parseInt(second);
    res.send({sum});
})

app.listen(3000,()=>{
    console.log("server is started");
})