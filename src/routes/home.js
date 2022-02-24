const express = require('express');
const router = express.Router();
const { navigationController} = require('../controller');
const upload = require('../middleware/multermiddproduct');


router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)

// Adminstrar productos
router.get('/admin/products',navigationController.adminProducts)

router.get('/admin/products/newProduct', navigationController.createProduct)
router.post('/admin/products/newProduct', upload.single('image'),navigationController.guardarProduct)

router.get('/admin/products/editProduct',navigationController.editProducts)

router.get('/admin/products/borrar/:id',navigationController.borrarProduct)



router.get('/admin/products/:id', navigationController.detailProducts)

module.exports = router;