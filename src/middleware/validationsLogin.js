const { body } = require('express-validator');

const validationsLogin = [

  body('email').notEmpty().isEmail().withMessage('Debe completar el campo email con un correo eléctronico válido'),
  body('password').notEmpty().withMessage('Debe ingresar una contraseña)'),
  
]


module.exports = validationsLogin