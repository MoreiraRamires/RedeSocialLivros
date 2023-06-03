const router = require('express-promise-router')();
const usuarioController = require('../api/controllers/usuario.controller');

//CRUD

router.post('/usuario',usuarioController.createUsuario);
router.get('/usuarios', usuarioController.findAllUsuarios);
router.get('/usuario/:id',usuarioController.findUsuarioById);
router.put('/usuario/:id',usuarioController.updateUsuario);
router.delete('/usuario/:id',usuarioController.deleteUsuario);

module.exports = router;
