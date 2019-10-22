const express = require('express');

const adminRoute = express.Router();
adminRoute.get('/add-product',(req, res, next)=>{
    // console.log("In add-product page");
    res.send("<form action=\"/admin/product\" method = \"POST\" ><input type = \"text\" name = \"title\"><button type = \"submit\">Submit</button></form")
    // next(); // allows the request to continue to the next middleware in line 
});

adminRoute.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/'); // this will route to the initial page
});

module.exports = adminRoute;
