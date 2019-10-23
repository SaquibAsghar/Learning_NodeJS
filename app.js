const path = require('path');
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();

// importing the routes
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const pageNotFoundRoute = require('./routes/pageNotFound(404)');


app.use(bodyParser.urlencoded({extended:true})); // should come at the starting of the app.use()

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(pageNotFoundRoute);


app.listen(3005);
