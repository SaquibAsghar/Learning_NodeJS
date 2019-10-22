const express  = require('express');
const app = express();

app.use('/add-product',(req, res, next)=>{
    console.log("In add-product page");
    res.send("<h1>This is the add product page</h1>")
    // next(); // allows the request to continue to the next middleware in line 
});
app.use('/',(req, res, next)=>{
    console.log("In '/' middleware");
    res.send('<h1>Hello from Express!</h1>')
});


app.listen(3005);
