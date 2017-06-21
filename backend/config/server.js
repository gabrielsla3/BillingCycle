//Porta no qual vai rodar o backend
const port = 3003;

//Interpretação do corpo da requisição
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

//Indica que o bodyParser será capaz de interpretar mais coisas do que a especificação diz.
//Toda requisição irá passar por este middleware
server.use(bodyParser.urlencoded({ extended: true }));

//Verifica se é json
server.use(bodyParser.json());

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
