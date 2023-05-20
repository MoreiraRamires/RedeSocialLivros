// @ts-nocheck
/**
 * Arquivo: src/routes/autor.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Autor'.
 */
const router = require('express-promise-router')();
const autorController = require('../controllers/autor.controller');

// ==> Definindo as rotas do CRUD - 'Product':
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/autores', autorController.createAutor);

// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/autores', autorController.listAllAutores);

// ==> Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/autores/:id', autorController.findAutorById);

router.put('/autores/:id', autorController.updateAutor);
router.delete('/autores/:id',autorController.deleteAutor);


module.exports = router;
