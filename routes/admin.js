const path =require('path')
const express = require('express');

// importing the path file
const rootDir = require('../util/path');

const adminRoute = express.Router();
adminRoute.get('/add-product',(req, res, next)=>{
    // console.log("In add-product page");
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    // next(); // allows the request to continue to the next middleware in line 
});

adminRoute.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/'); // this will route to the initial page
});

module.exports = adminRoute;
