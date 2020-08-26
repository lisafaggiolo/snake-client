/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const stdin = process.stdin;


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = (key) => {

  stdin.on('data', (key) => {
    process.stdout.write('\u0003');

    if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }


    /*if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }


    if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }


    if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }


    if (key === '\u0003'){
      process.exit()
    } else {
      process.stdout.write('.');
    }*/
  });

}

const { connect } = require('./client.js');

console.log('Connecting...');

connect();
setupInput();
handleUserInput();