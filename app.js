//modo tradicional de criar um servidor

const http = require('http')
const express = require('express')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type':'text/plain'});
    switch(req.url){
        case '/':
            res.end("Você está na página Home")
            break;
        case '/contato':
            res.end("Você está na nossa página de contato")
            break;
        case '/quemsomos':
            res.end("Você está na nossa página quem somos")
            break;
        default:
            res.end("ERRO 402 - PAGINA NÃO ENCONTRADA")

    }    
}).listen(3010, 'localhost');

// criando servidor com express

// const http = require('http');
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.send("Rodando pagina home"))
// app.get('/contato', (req, res) => res.send("rodando pagina de contato"))
// app.get('/sobrenos', (req, res) => res.send("Rodando pagina quem somos"))

// app.listen(3010, () => 

// console.log("Servidor rodando na porta 3010")

// )