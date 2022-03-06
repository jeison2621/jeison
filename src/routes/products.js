const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')
const upload = require('../middleware/multermiddproduct');
const { validationsProducts } = require('../middleware')



// Administrar productos
router.get('/',productController.adminProducts)

// Crear productos
 router.get('/newProduct', productController.createProduct)
 router.post('/newProduct', upload.single('image'),validationsProducts,productController.guardarProduct)

// Editar productos
router.get('/editProduct/:id',productController.getEditProducts)
router.post('/editProduct/:id', upload.single('image'),validationsProducts,productController.editProducts)

// Eliminar productos
router.get('/borrar/:id',productController.borrarProduct)

// Detalle producto

router.get('/:id', productController.detailProducts)


module.exports = router