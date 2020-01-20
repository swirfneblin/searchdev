import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.105:3333', {
  autoConnect: false,
});