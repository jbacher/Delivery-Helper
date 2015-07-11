//this is the main file for setting stuff up
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path')

var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(bodyParser.urlencoded({ extended: true })); 

// app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app)

app.listen(port);               

console.log('Application is running on port ' + port);

exports = module.exports = app;