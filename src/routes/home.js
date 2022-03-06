const express = require('express');
const router = express.Router();
const { navigationController} = require('../controller');


router.get('/',navigationController.getHome)
router.get('/admin',navigationController.getAdmin)

router.get('/register',navigationController.register)


router.get('/login',navigationController.login)




router.get('/:id',navigationController.getDetalle)


module.exports = router;