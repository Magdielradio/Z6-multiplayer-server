const { WebSocketServer } = require('ws');
const http = require('http');
const server = http.createServer();
server.listen(process.env.PORT || 3000, '0.0.0.0');
const wss = new WebSocketServer({server});
