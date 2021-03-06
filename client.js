const net = require('net');
const process = require('process')
const { IP, PORT} = require('./constants')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', ()    => {console.log("Successfully connected to game server")});
  conn.on('data', (data)   => {console.log(data)});
  conn.write("Name: LFF"); 
  //conn.write('Move: up');
  //conn.write('Move: right');

  return conn;
}


//console.log('Connecting ...');
//connect()


module.exports = { connect };