import socketIO from 'socket.io-client';

const socket = socketIO('http://localhost:8080/'); // listen to connection by socket

export default socket;