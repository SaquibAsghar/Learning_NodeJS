const express = require('express');

const shopRoute = express.Router();

shopRoute.get('/',(req, res, next)=>{
    // console.log("In '/' middleware");
    res.send('<h1>Hello from Express!</h1>')
});

module.exports = shopRoute;