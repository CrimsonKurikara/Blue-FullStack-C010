// SERVER (API)
// importar o express para que seje possivel ultilizar as funções na nossa aplicação

const express = require('express');

//inicializar o express no arquivo js para que possa assumir as funções do servidor

const app = express();

const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        salario: 3000,
        oportunidade: "Front-End Jr",
        tipo: "Estágio"
    },
    {
        id: 2,
        empresa: "Google",
        salario: 10000,
        oportunidade: "Front-End Jr",
        tipo: "CLT"
    },
    {
        id: 3,
        empresa: "Facebook",
        salario: 20000,
        oportunidade: "Full Stack Sr",
        tipo: "PJ"
    },
    {
        id: 4,
        empresa: "Amazon",
        salario: 15000,
        oportunidade: "Full Stack PI",
        tipo: "CLT"
    }
]

// JSON - Javascript Object Notation
// falo para o express trabalhar com middleware de json para trabalhar no formato JSON.

app.use(express.json());

// API - Forma de comunicação entre sistemas que contem endereços (EndPoints)
// REST - GET/POST/PUT/DELETE
// criar um EndPoint para retornar uma mensagem para um cliente

app.get('/',(req, res) => {
    //REQ (REQUEST/REQUISIÃO)
    //RES (RESPONDE/RESPOSTA)
    res.send('Hello World!');
})

//[GET] /vagas - Retorna a lista de vagas

app.get('/vagas', (req, res) => {
    res.send(blueVagas);
})

//EndPoint [GET] /vagas/{id} - retonar para o cliente uma única vaga de acordo com o ID

app.get('/vagas/:id', (req, res) => {
    //Acessar o ID via a requisição
    const idParams = req.params.id;

    //Buscar um item na lista de acordo com o seu ID
    //Procuro na lista uma vaga que contenha o ID igual ao que eu recebi via parametro

    const vagaEncontrada = blueVagas.find(vaga => vaga.id == idParams);

    //Envio para o Front-End a vaga que encontrei

    res.send(vagaEncontrada)
})

// Definir a porta que o bak-end vai executar

const port = 3000;

// Inicializa o servidor na seguint porta

app.listen(port, () => {
    console.log(`App Rodando na porta ${port}`);
})