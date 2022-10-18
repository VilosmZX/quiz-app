const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routers/routers');
app.use(cors())
app.use(express.json());
app.use('/api', router);
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    }
});

io.on('connection', (s) => {
    s.on('disconnect', () => {
        console.log(`${s.id} disconnected!`);
    })

    s.on('send_message', ({ message }) => {
        s.broadcast.emit('receive_message', message);
    })
});

server.listen(5174, () => console.log('Server is running...'));