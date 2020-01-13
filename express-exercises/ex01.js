const express = require('express');
const server = express();

server.get('/', function(req, res) {
    res.send('<h1>index</h1>');
});

// all requests rules;
server.all('/teste/', function(req, res) {
    res.send('<h1>teste</h1>');
})

// regular expressions;
server.get(/api/, function(req, res) {
    res.send('<h1>API</h1>');
});

// middlewere USE, é global para todo o sistema, passando uma url ou não passando.
server.use(function(req, res) {
    res.send('<h1>API</h1>');
});

server.route('/clientes')
    .get(req, res => res.send('Lista de Clientes'))
    .post(req, res => res.send('Novo de Cliente'))
    .put(req, res => res.send('Atualiza CLientes'))
    .delete(req, res => res.send('Remove Cliente'))

server.listen(3000, () => console.log('Executando...'));
