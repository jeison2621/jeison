const express = require('express');
const router = express.Router();
const { navigationController} = require('../controller');


router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)

// Adminstrar productos

router.get('/admin/newProduct', navigationController.createProducto)


module.exports = router;