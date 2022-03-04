const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller');
const upload = require('../middleware/multermiddproduct');
const { validationsProducts } = require('../middleware')

router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)

//Login
router.get('/login', navigationController.login)

//Register
router.get('/register',navigationController.register)

//Detalle productos
router.get('/:id',navigationController.detailProducts)

// Administrar productos
router.get('/admin/products',navigationController.adminProducts)

// Crear productos
router.get('/admin/products/newProduct', navigationController.createProduct)
router.post('/admin/products/newProduct', upload.single('image'), validationsProducts, navigationController.guardarProduct)

// Editar productos
router.get('/admin/products/editProduct/:id',navigationController.getEditProducts)
router.post('/admin/products/editProduct/:id', upload.single('image'), validationsProducts, navigationController.editProducts)

// Eliminar productos
router.get('/admin/products/borrar/:id',navigationController.borrarProduct)

router.get('/admin/products/:id', navigationController.detailProducts)

module.exports = router;