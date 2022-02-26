const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

//Vista principal de usuarios
router.get('/', userController.adminUsers)

//Crear usuarios
router.get('/newUser', userController.newUser)
router.post('/newUser', userController.createUser)

// Editar usuarios
router.get('/editUser/:id',userController.getEditUsers)
router.post('/editUser/:id',userController.editUsers)

// Eliminar usuarios
router.get('/borrar/:id',userController.borrarUser)
router.get('/:id', userController.detailUsers)

module.exports = router