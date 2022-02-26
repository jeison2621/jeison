var express = require('express');
var router = express.Router();

router.use('/', require('./home'))
router.use('/admin/users', require('./users'))

module.exports = router;