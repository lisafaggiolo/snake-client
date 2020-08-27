const stdin = process.stdin;
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn; 
  return stdin;

}

const handleUserInput = (key, ) => {

  stdin.on('data', (key) => {
    process.stdout.write('\u0003');

    if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }


    if (key === 'w'){
      connection.write('Move: up')
    } else {
      process.stdout.write('.');
    }


    if (key === 's'){
      connection.write('Move: down')
    } else {
      process.stdout.write('.');
    }


    if (key === 'd'){
      connection.write('Move: right')
    } else {
      process.stdout.write('.');
    }


    if (key === 'a'){
      connection.write('Move: left')
    } else {
      process.stdout.write('.');
    }

    if (key === 'l'){
      connection.write('Say: I Shall Pass!!')
    } else {
      process.stdout.write('.');
    } 

    if (key === 'p'){
      connection.write('Say: Whatsssss up!?')
    } else {
      process.stdout.write('.');
    }

    
  });

}

module.exports = { setupInput };