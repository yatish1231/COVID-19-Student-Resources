var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.get("/", function(req,res){
    res.render("home");
});

app.get("/wellness", function(req, res){
    res.render("wellness");
});

app.get("/education", function(req, res){
    res.render("education");
});

app.get("/finance", function(req, res){
    res.render("finance");
});

app.listen(port, function(err){
    if(err){
        console.log('Error has occured while starting the server');
    }
    else{
        console.log('Started listening on port' + port);
    }
})
