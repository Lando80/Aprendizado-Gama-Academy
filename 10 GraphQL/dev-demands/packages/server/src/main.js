console.log('Olá Enfermeira');

import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((request, response) => {
    switch(request.url){
        case '/status': {
            response.writeHead(200,{
                'Content-Type': 'application/json',
            });
            response.write(
                JSON.stringify({
                    status: 'OuKay',
                })
            );
            response.end();
            break;
        }
        case '/authenticate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                const params = parse(data);
               
                response.end();
            });
            break;
        }

        default: {
            response.writeHead(404, 'Serviço não encontrado');
            response.write('Erro 404, Servico nao encontrado, Algo errado nao esta certo!!');
            response.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`O Servidor está ouvindo o site http://${HOST}:${PORT}`);
});
