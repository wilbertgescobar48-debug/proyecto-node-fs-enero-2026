import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

const server = createServer(async(req, res) => {
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

if(method === 'GET' && url === '/archivo') {
  console.log('leyendo el archivo...');
  readFile('text.txt', 'utf-8').then((data) => {
    console.log(data);
  });
  const data = await readFile('text.txt', 'utf-8');
  console.log(data);
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end (data);

  const data1 = await readFile('text.txt', 'utf-8')
  
    console.log(data1);

  return;
}


//ruta de health
if (method === 'GET' && url === '/health') {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify({ 
      message: 'mensaje en json desde health', 
      code: 200, 
      status: 'ok' 
    })
  );
    return;
}
  res.end("hola mundo");
}); 

/*const listen =(server, port) => {
  return new Promise((resolve, reject) => {
    server.listen(port, () => resolve('todo fue bien'));
  });
};

listen(server, 3000)
.then((mensaje) => {
  console.log(mensaje);
});*/


/*await new Promise((resolve) => 
  server.listen(3000, () => resolve('hola el servidor esta encendido'))
). then((mensaje) => console.log(mensaje));
//.then((mensaje) => console.log(mensaje))
//.catch(() => {});*/

const message = await new Promise((resolve) =>
  server.listen(3000, () => resolve('servidor encendido'))
);
console.log(message);

/*server.listen(3000, () => {
  console.log('el servidor va bien');
});*/