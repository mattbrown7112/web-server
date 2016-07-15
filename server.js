var express = require('express');
var app = express();
var PORT = 3000;

// middleware can be attached to specific routes or the whole application
var middleware = require('./middleware.js');


app.use(middleware.logger);

// '/' index.html is the default route

app.get('/about', middleware.requireAuthentiction, function (req, res) { // get request from http
	res.send('About Us!');
});

//how to access static folder
app.use(express.static(__dirname + '/public'));
//console.log(__dirname)

app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + '!')
});