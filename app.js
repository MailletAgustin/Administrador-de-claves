const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('port', process.env.port || 1258) 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))


app.get('/usuarios/iniciar-sesion', (req, res) => {
    res.render('usuarios/iniciar-sesion');        
});

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');
});

server.listen(app.get('port'), server => {
  console.log('Servidor escuchando en puerto', app.get('port'));
});