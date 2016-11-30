var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.set('views',__dirname +'/views');
app.set('view engine','pug');

app.get('/',function(req,res){
	res.render("home");
});

app.get('/student',function(req,res){
	res.render("student");
});

app.get('/teacher',function(req,res){
	res.render("teacher");
});

app.get('/download',function(req,res){
	res.render("download");
});

console.log("server running at 3000");
app.listen(3000);