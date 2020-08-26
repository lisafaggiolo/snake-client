const net = require('net');
const process = require('process')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {console.log("Successfully connected to game server")});
  conn.on('data', (data) => {console.log(data)});
  conn.write("Name: LFF"); 
  conn.write('Move: down');
  //conn.write('Move: up');
  //conn.write('Move: right');

  return conn;
}


//console.log('Connecting ...');
//connect()


module.exports = { connect };