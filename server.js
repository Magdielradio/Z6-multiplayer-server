const { WebSocketServer } = require('ws');
const http= require('http');
const server = http.createServer();
server.on('request', (req, res) => res.end('Z6 Multiplayer Server Online'));
const wss = new WebSocketServer({ server });
wss.on('connection', (socket) => {
console.log('Jugador conectado');
socket.on('message', (message) => {
wss.clients.forEach((client) => {
if (client.readyState === 1) {
client.send(message.toString());
}  
});   
});
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0');
