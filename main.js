import { createServer } from 'node:http';

const server = createServer((req, res) => {
  console.log(req); // Evita loguear 'req' entero porque es un objeto gigante
  res.end("hola mundo");
}); // Aquí faltaba cerrar la llave y el paréntesis

// Tienes que decirle al servidor en qué puerto escuchar
server.listen(3000, () => {
  console.log('el servidor va bien');
});