
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    errorHandler = require('errorhandler'),
    serverRouteFactory = require('./server/routes'),
    appConfig = require('./config');

//////////////////////////
// Environment Variables
//////////////////////////

var port = process.env.PORT = appConfig.server.port;
var version = process.env.NODE_APP_VER = require('./package.json').version;
var applicationName = process.env.NODE_APP = require('./package.json').name;
var evironmentName = process.env.NODE_ENV = appConfig.env.name;

//////////////////////////
// Settings & Middleware
//////////////////////////

app.set('port', port);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//////////////////////////
// Logging
//////////////////////////

if ('development' === app.get('env')) {
  app.use(errorHandler());
}


//////////////////////////
// Routing
//////////////////////////

serverRouteFactory.applyRoutes(app);


///////////////////////
// Start 'er UP!!
///////////////////////

try {
  app.listen(port);
  console.log("%s server (v%s) using port %s", applicationName, version, port);
} catch (err) {
  console.log("Error when trying to create/start the server");
  throw err;
}
