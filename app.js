const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product',(req, res, next)=>{
    // console.log("In add-product page");
    res.send("<form action=\"/product\" method = \"POST\" ><input type = \"text\" name = \"title\"><button type = \"submit\">Submit</button></form")
    // next(); // allows the request to continue to the next middleware in line 
});

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next)=>{
    // console.log("In '/' middleware");
    res.send('<h1>Hello from Express!</h1>')
});


app.listen(3005);
