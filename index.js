const Server = require( './models/server' );
require('dotenv').config();

const server = new Server();

server.execute();



// io.on( 'connection', ( socket ) => {
//   // console.log( socket.id );

//   // socket.emit( 'mensaje-bienvenida', {
//   //   msj: 'Bienvenido al server',
//   //   fecha: new Date()
//   // } );

//   //? Escuchar el evento
//   // socket.on( 'mensaje-cliente', ( data ) => {
//   //   console.log( 'el cliente emitió algo: ', data );
//   // } );

//   socket.on( 'mensaje-to-server', ( data ) => {
//     console.log( data );

//     // socket envía al puerto
//     // socket.emit( 'mensaje-from-server', data );
    
//     // io envía a todos los instanciados
//     io.emit( 'mensaje-from-server', data );
//   } );

// } );

