'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const publicPath = path.resolve(__dirname, 'public/angular/app');
const PORT = process.env.PORT || 5000;
const app = express();

//serving our index.html
app.use(express.static(publicPath));
app.use(helmet());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(favicon(__dirname + '/public/img/____.ico'));

app.listen(PORT, (req,res) => {
  console.log('Initializing homing_roster');
  console.log('Server running on PORT ' + PORT);
});
