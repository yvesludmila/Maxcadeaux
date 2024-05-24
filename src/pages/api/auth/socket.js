// pages/api/socket.js ------------------------------
import {Server} from "socket.io";
import {send} from "../../../lib/models/chat";

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log("Socket is already running");
    } else {
        console.log("Socket is initializing");
        const io = new Server(res.socket.server, {transports: ['polling']});
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            socket.on('input-change', (msg) => {
                socket.broadcast.emit('update-input', msg);
            });
            socket.on('sendMessage', async (data, callback) => {
                const sent = await send(
                    data.time,
                    data.idUser,
                    data.message,
                    data.date
                );
                if (sent) {
                    socket.broadcast.emit('messageSent', sent[0]);
                    callback();
                }
            });
        });
    }
    res.end();
};

export default SocketHandler;
