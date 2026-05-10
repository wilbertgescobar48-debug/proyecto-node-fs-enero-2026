import { resolve } from 'node:dns';
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  const { method, url } = req;

if (method === 'GET' && url === '/') {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end ('hola mundo este es el home y algo mas');
  return;
}

//ruta de la api
if (method === 'GET' && url === '/api') {
   res.writeHead(200, {"content-type": "application/json"});
  res.end (JSON.stringify({ message: 'respuesta en json', code: 200, status: 'ok' }));
  return;
}

//ruta de health
if (method === 'GET' && url === '/health') {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify({ message: 'mensaje en json desde health', code: 200, status: 'ok' }));
    return;
}
  res.end("hola mundo");
}); 

/*const listen = (server, port) => {
  return new Promise((resolve, reject) => {
    server.listen(port, () => resolve('todo fue bien'));
  });
};

listen(server, 3000).then((mensaje) => {
  console.log(mensaje);
});*/
await new Promise((resolve) => server.listen(3000, resolve));
/*
server.listen(3000, () => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('el servidor va bien');
});*/