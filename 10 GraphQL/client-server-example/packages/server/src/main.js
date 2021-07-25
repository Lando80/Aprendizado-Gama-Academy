import { createServer } from 'http';
import { readFile } from 'fs';
import { resolve } from 'path';
import { parse } from 'querystring';

const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json',
            });
            response.write(JSON.stringify({
                status: 'deu certo :) é nós!',
            })
            );
            response.end();
            break;
        }

        case '/authenticate':{
            let data = '';
            request.on('data', (chunk) =>{
                data += chunk;
            });
            request.on('end', () => {
                const params = parse(data);
                console.log(parse(data));
                
                response.end();
            });
            break;
        }

        default: {
            response.writeHead(404, 'Serviço não encontrado');
            response.end();
        }
    }

});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HNAME = process.env.HNAME || '127.0.0.1'; 

server.listen(PORT, HNAME, () => {
    console.log(`Server is linstering at http://${HNAME}:${PORT}`);
});

