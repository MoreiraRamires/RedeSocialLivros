
const express = require('express');
// crio um servidor express
const app = express();
const PORT = 3000;

// DB local (tempo de execução)
const data = [];


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
  

// o servidor irá rodar dentro da porta 3333 - rode com yarn dev
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);