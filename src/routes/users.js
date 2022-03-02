const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const upload = require('../middleware/multermidd')

//Vista principal de usuarios
router.get('/', userController.adminUsers)



//Crear usuarios
router.get('/newUser', userController.newUser)
router.post('/newUser', upload.single('image'), userController.createUser)

// Editar usuarios
router.get('/editUser/:id',userController.getEditUsers)
router.post('/editUser/:id', upload.single('image'), userController.editUsers)

//Detalle usuario
router.get('/:id', userController.detailUser)

// Eliminar usuarios
router.get('/borrar/:id',userController.borrarUser)

module.exports = router