
const express = require('express');
// crio um servidor express
const app = express();
const PORT = 3000;

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
  ssl: false
});



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


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");

  });

 
  
  // criação de rota que será acessada utilizando o método HTTP POST/
  app.use(express.json());

  app.post('/', (req, res)=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})
  


// Enviando um arquivo

const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'File')))


  app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname+"/File",'1.jpg'));
});
  




process.on('beforeExit', () => {
  client.end();
});


