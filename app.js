const express = require('express');

const app = express();
const port = 3000;

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'password') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
};

// Configuração para a rota /
app.get('/', (req, res) => res.send('Hello World!'));

// Configurando uma rota com retorno de um JSON
app.get("/products", isAuthorized, (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});

// Inicialização do aplciativo Web
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
