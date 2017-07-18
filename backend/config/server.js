//Porta no qual vai rodar o backend
const port = 3003;

//Interpretação do corpo da requisição
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const AllowCors = require('./cors');
const queryParser = require('express-query-int');

//Indica que o bodyParser será capaz de interpretar mais coisas do que a especificação diz.
//Toda requisição irá passar por este middleware
server.use(bodyParser.urlencoded({ extended: true }));

//Verifica se é json
server.use(bodyParser.json());

//Permite a utilização do cors
server.use(AllowCors);

server.use(queryParser());

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
