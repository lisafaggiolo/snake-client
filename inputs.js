const stdin = process.stdin;


const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput); 
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

module.exports = { setupInput };