const express = require('express');
const router = express.Router();
const { navigationController} = require('../controller');
const upload = require('../middleware/multermiddproduct');
//const { validationNewProduct } = require('../middleware/valitations')

router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)


// Administrar productos
router.get('/admin/products',navigationController.adminProducts)

// Crear productos
 router.get('/admin/products/newProduct', navigationController.createProduct)
 router.post('/admin/products/newProduct', upload.single('image'),navigationController.guardarProduct)

// Editar productos
router.get('/admin/products/editProduct/:id',navigationController.getEditProducts)
router.post('/admin/products/editProduct/:id', upload.single('image'),navigationController.editProducts)

// Eliminar productos
router.get('/admin/products/borrar/:id',navigationController.borrarProduct)

// Detalle producto
router.get('/:id',navigationController.detailProducts)
router.get('/admin/products/:id', navigationController.detailProducts)


module.exports = router;