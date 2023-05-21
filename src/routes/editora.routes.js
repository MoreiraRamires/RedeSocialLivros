/**
 * Arquivo: src/routes/editora.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Editora'.
 */

const router = require('express-promise-router')();
const editoraController = require('../controllers/editora.controller');

//CRUD

router.post('/editoras',editoraController.createEditora);
router.get('/editoras',editoraController.findAllEditoras);
router.get('/editora',editoraController.findEditoraById);
router.put('/editoras/:id',editoraController.updateEditora);
router.delete('/editoras/:id',editoraController.deleteEditora);

//path variavel
// request argument ?




module.exports = router;
