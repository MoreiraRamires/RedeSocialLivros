
const express = require('express');
// crio um servidor express
const app = express();
const PORT = 3000;

const { Client } = require('pg');



app.get('/autores', (req, res) => {
  client.query('SELECT * FROM autores')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).send(err.message));
});

client.connect()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
    app.listen(PORT, () => console.log('Servidor iniciado na porta: ',PORT));
  })
  .catch(err => console.error('Erro ao conectar com o banco de dados', err));




// criação de rota que será acessada utilizando o método HTTP GET/


app.get('/data', (req, res) => {
    res.status(200);
    return res.json({ data });

  });



 
 

