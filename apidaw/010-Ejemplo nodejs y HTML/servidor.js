const http = require('http');

// Datos
const clientes = [
  { nombre: 'Juan' },
  { nombre: 'Jose Vicente' },
];

// Servidor
const server = http.createServer((req, res) => {
  if (req.url === '/clientes') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(clientes, null, 4));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Arrancar servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
