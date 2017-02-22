
var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('../webpack.config');
const port = process.env.PORT || 9000;
if(process.env.NODE_ENV != 'production'){
/* eslint-disable no-console */
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
var server = require('http').Server(app);
server.listen(9999);
app.use(express.static(__dirname + '/'))
console.log('Server listening on port :9999');
app.get('*', function (req, res) {
  res.sendfile(__dirname + '/client/index.html');
});