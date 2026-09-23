const { WebSocketServer } = require('ws');
const http = require('http');
const server = http.createServer();
server.listen(3000);
const wss = new WebSocketServer({server});
