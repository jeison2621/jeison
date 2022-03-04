const express = require('express');
const router = express.Router();
const { userController } = require('../controller')
const { validationsUsers } = require('../middleware')
const upload = require('../middleware/multermidd')

//Vista principal de usuarios
router.get('/', userController.adminUsers)
router.get('/newUser', userController.newUser)

//PRUEBA - TESTING
router.get('/email', userController.consultEmail)

//Crear usuarios
router.post('/newUser', upload.single('image'), validationsUsers, userController.createUser)

// Editar usuarios
router.get('/editUser/:id',userController.getEditUsers)
router.post('/editUser/:id', upload.single('image'), validationsUsers, userController.editUsers)

// Eliminar usuarios
router.get('/borrar/:id',userController.borrarUser)

//Detalle usuario
router.get('/:id', userController.detailUser)

module.exports = router