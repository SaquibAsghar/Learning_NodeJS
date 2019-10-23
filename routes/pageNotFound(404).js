const express = require('express');
const path = require('path');

// importing the path file
const rootDir = require('../util/path');

const pageNotFoundRoute = express.Router();
pageNotFoundRoute.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})


module.exports = pageNotFoundRoute;