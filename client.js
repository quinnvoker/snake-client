const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected! Welcome to Snake!');
    conn.write('Name: QNN');
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;