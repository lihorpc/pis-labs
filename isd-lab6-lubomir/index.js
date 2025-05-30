const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const createSocket = require('./lib/socket');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Підʼєднуємо WebSocket‑логіку
createSocket(io);

// Віддаємо статичні файли
app.use(express.static(path.join(__dirname, 'static')));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀  Сервер працює на http://localhost:${PORT}`);
});