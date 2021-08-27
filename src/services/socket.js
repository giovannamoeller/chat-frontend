import socketIO from 'socket.io-client';

const socket = socketIO('https://gikitica-chat.herokuapp.com/'); // listen to connection by socket

export default socket;