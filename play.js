
const { connect } =    require('./client.js');
const { setupInput } = require('./inputs.js');

console.log('Connecting...');

connect();
setupInput();
