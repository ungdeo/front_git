const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;

app.get('/cookies',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','cookies.html'));
})

app.listen(PORT,()=>{
    console.log('server starting',PORT)
})