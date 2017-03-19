'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var publicPath = path.resolve(__dirname, 'public');
var port = 3000;

var app = express();

//serving our index.html
app.use(express.static(publicPath));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(favicon(__dirname + '/public/img/____.ico'));

app.listen(port, function(req,res) {
  console.log('Inizitializing homing_roster');
  console.log('Server running on port ' + port);
});

app.get('/', function(req, res){
  res.send('god, youre a fuckin idiot');
});
