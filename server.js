//importando o express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//executa a função express e retorna para app
const app = express();

//Permitindo que a aplicação receba requisições POST no formato JSON
app.use(express.json());

//Podemos passar domínios e configurações de segurança como parâmetro do CORS, deixando dessa forma o acesso está totalmente liberado;
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

//requerendo a model 
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));


//define a porta que será executada a aplicação
app.listen(3001);