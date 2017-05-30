'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const publicPath = path.resolve(__dirname, 'public/angular/app');
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

const forceSsl = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (env === 'production') {
  app.use(forceSsl);
}

//serving our index.html
app.use(express.static(publicPath));
app.use(helmet());
app.use(require('prerender-node'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(favicon(__dirname + '/public/img/____.ico'));

app.listen(PORT, (req,res) => {
  console.log('Initializing homing_roster');
  console.log('Server running on PORT ' + PORT);
});

app.get('/', (req, res) => {
  res.send('INITIALIZED');
});
