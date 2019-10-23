const path =require('path')
const express = require('express');

const adminRoute = express.Router();
adminRoute.get('/add-product',(req, res, next)=>{
    // console.log("In add-product page");
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    // next(); // allows the request to continue to the next middleware in line 
});

adminRoute.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/'); // this will route to the initial page
});

module.exports = adminRoute;
