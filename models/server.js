// Servidor de Express
const express = require( 'express' );
const http = require( 'http' );
const socketio = require( 'socket.io' );
const path = require( 'path' );
const Sockets = require( './sockets' );
const cors = require( 'cors' );

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer( this.app );

    // Configuraciones de socket
    this.io = socketio( this.server, {

    } );
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

    // CORS
    this.app.use( cors() );

  }

  configurarSockets() {
    new Sockets( this.io );
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen( this.port, () => {
      console.log( 'Server running in port: ', this.port );
    } );
  }

}

module.exports = Server;