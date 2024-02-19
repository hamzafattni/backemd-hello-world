const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('home');
});

app.get('/store',(req,res)=>{
    res.send('store');
});

app.listen(port,()=>{
    console.log(`hello hamza ${port}`);
});
