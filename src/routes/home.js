const express = require('express');
const router = express.Router();
const { navigationController} = require('../controller');


router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)

// Adminstrar productos
router.get('/admin/products',navigationController.adminProducts)
router.get('/admin/products/newProduct', navigationController.createProduct)
router.get('/admin/products/editProduct',navigationController.editProducts)


module.exports = router;