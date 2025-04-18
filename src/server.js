const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.send('Chat server is running');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = config.port || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});