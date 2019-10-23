const express = require('express');
const path = require('path');

const pageNotFoundRoute = express.Router();
pageNotFoundRoute.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'))
})


module.exports = pageNotFoundRoute;