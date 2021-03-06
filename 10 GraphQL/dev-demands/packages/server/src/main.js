console.log('Olá Enfermeira');

import express from 'express';
import cors from 'cors';

const server = express();



server.get('/status', (_, response) => {
    response.send({
        status: 'Oquey',
    });
});

const enableCors = cors({ origin: 'http://localhost:3000' });


server
    .options('/authenticate', enableCors)
    .post(
    '/authenticate', enableCors, express.json(), (request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password);
    response.send({
        Okay: true,
    });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`O Servidor está ouvindo o site http://${HOST}:${PORT}`);
});
