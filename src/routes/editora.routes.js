/**
 * Arquivo: src/routes/editora.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Editora'.
 */

const router = require('express-promise-router')();
const editoraController = require('../api/controllers/editora.controller');

//CRUD

router.post('/editoras',editoraController.createEditora);
router.get('/editoras',editoraController.findAllEditoras);
router.get('/editora/:id',editoraController.findEditoraById);
router.put('/editora/:id',editoraController.updateEditora);
router.delete('/editora/:id',editoraController.deleteEditora);

//path variavel
// request argument ?




module.exports = router;
