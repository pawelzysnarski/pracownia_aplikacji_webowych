const express = require('express');
const fs = require('fs');
const app = express();
app.listen(8080,()=>{
    app.get("/",(req,res)=>{
        res.send("Strona główna");
    })
    app.get("/json",(req,res)=>{
        res.json({
            car: 'audi',
            engine: 'V4'
        })
    })
    app.get("/page1",(req,res)=>{
        res.send("<!DOCTYPE html><head lang='pl'><title>Strona 1</title><meta charset='utf8'> </head><body><h1>Nagłówek Strony</h1></body>");
    })
    app.get("/page2",(req,res)=>{
        res.sendFile(__dirname+'/page2.html');
    })
    app.get("/get_params",(req,res)=>{
        console.log(req.query);
        fs.appendFile("params_"+Date.now()+".json",JSON.stringify(req.query),'utf-8',(err)=>{
            if(err){
                console.log(err.message);
            }
        })
        res.end();
    })
    app.use(express.static(__dirname+'/assets'));
    app.all('*',(req,res)=>{
        res.status(404).send('Error: No file to read');
    })
});