#!/usr/bin/env node

/**
 * Module dependencies.
 */
import winston from '@server/config/winston';

//Importando config de aplicación
import configKeys from '@server/config/configKeys';

//Importando la clase de conexión
import MongooseODM from '@server/config/odm';

var app = require('../app');
var debug = require('debug')('projnotes:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(configKeys.port || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      //console.error(bind + ' requires elevated privileges');
      winston.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      winston.error(`${bind} is alredy in use`);
      //console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

//Creando el objeto de conexión
const mongooseOdm = new MongooseODM(configKeys.databaseUrl);
//IIFE
(async () => {
  try {
    const connectionResult = await mongooseOdm.connect();
    if (connectionResult) {
      winston.info('Connection to database has successfuly established');
      /**
       * Listen on provided port, on all network interfaces.
       */

      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    }
  } catch (error) {
    winston.error(`Error when connecting to Database: ${error.message}`);
  }
})();
