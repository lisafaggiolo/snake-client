const net = require('net');
const process = require('process')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {console.log("Successfully connected to game server")});
  conn.on('data', (data) => {console.log(data)});
  conn.write("Name: LFF"); 
  //conn.write('Move: up');
  //conn.write('Move: right');

  return conn;
}


//console.log('Connecting ...');
//connect()


module.exports = { connect };