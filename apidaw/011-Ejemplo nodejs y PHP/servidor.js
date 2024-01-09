// npm install express
// npm install express-basic-auth
const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

const usuarios = {
  'josevicente': 'carratala',
  'juan': 'lopez'
};

// Middleware to handle Basic Authentication
app.use(basicAuth({
  users: usuarios,
  challenge: true, // Sends the challenge headers if authentication fails
  unauthorizedResponse: 'Acceso no autorizado de verdad'
}));

// Define a route that returns JSON data
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Juan' },
    { nombre: 'Jose Vicente' },
  ];

  res.json(clientes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
