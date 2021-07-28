console.log('Olá Enfermeira');

import express, { request, response } from 'express';

const server = express();

server.get('/status', (_, response) => {
    response.send({
        status: 'Oquey',
    });
});

server.post('/authenticate', express.json(), (request, response) => {
    console.log(
        'E-mail', request.body.email,
        'Senha', request.body.password
    );

    response.send();
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`O Servidor está ouvindo o site http://${HOST}:${PORT}`);
});
