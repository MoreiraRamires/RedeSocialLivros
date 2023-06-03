const express = require('express');
const cors = require('cors');
const app = express();
// ==> Rotas da API:
const index = require('./routes/index');
// const autoresRoute = require('./routes/autor.routes');
// const editorasRoute = require('./routes/editora.routes')
const usuariosRoute = require('./routes/usuario.routes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);


// app.use('/', autoresRoute);
// app.use('/', editorasRoute);
app.use('/', usuariosRoute);


module.exports = app;



    