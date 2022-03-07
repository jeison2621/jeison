const express = require('express');
const router = express.Router();
const { navigationController, apiController } = require('../controller');
const upload = require('../middleware/multermidd')


router.get('/',navigationController.getHome)

//API
router.get('/api/users',apiController.apiusers)
router.get('/api/products',apiController.apiproducts)

router.get('/api/users/search',apiController.searchusers)
router.get('/api/products/search',apiController.searchproducts)

router.get('/admin',navigationController.getAdmin)

router.get('/register',navigationController.register)
router.post('/register', upload.single('image'), navigationController.guardar)

router.get('/login',navigationController.login)

router.get('/:id',navigationController.getDetalle)

//API por id
router.get('/api/users/:id',apiController.detailuser)
router.get('/api/products/:id',apiController.detailproduct)

module.exports = router;