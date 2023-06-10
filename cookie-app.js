const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

app.use( cookieParser());//

const PORT = 3000;

app.get('/cookies',(req,res)=>{

    //res.setHeader(200,'brand=kim')
    //res.cookie('brand','jemicon');
    const today = new Date();
    today.setDate(today.getDate() + 10);
    res.cookie('brand',{
        name: 'jemicon',
        id : 'jemicon',
        Expires: today.toUTCString(),
        HttpOnly: true,
        Secure : true
    })
    res.sendFile(path.join(__dirname,'views','cookies.html'));
})

app.get('/delCookies',(req,res)=>{
    res.clearCookie('brand');
    res.redirect('/showCookies');
    // front : location.href = '/showCookies'
})

app.get('/showCookies',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})

app.listen(PORT,()=>{
    console.log('server starting',PORT)
})