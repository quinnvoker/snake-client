let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', data => handleUserInput(data));
  stdin.resume();
  return stdin;
};

// my controls are 'wars' because I use the Colemak keyboard layout :)
const controlMap = {
  w: 'Move: up',
  a: 'Move: left',
  r: 'Move: down',
  s: 'Move: right'
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  connection.write(controlMap[data]);
};

module.exports = {
  setupInput,
};