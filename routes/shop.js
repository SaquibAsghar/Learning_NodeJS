const path = require('path');

const express = require('express');

// importing the path file
const rootDir = require('../util/path');

const shopRoute = express.Router();


shopRoute.get('/',(req, res, next)=>{
    // console.log("In '/' middleware");
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = shopRoute;