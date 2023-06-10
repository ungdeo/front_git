const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

app.use( cookieParser());//

const PORT = 3000;

app.get('/cookies',(req,res)=>{

    res.setHeader(200,'brand=kim')
    res.sendFile(path.join(__dirname,'views','cookies.html'));
})

app.listen(PORT,()=>{
    console.log('server starting',PORT)
})