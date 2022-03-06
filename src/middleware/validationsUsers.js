const { body } = require('express-validator');

const validationsUsers = [
  body('name').notEmpty().withMessage('Debe completar el campo nombre(s)'),
  body('lastname').notEmpty().withMessage('Debe completar el campo apellidos'),
  body('email').notEmpty().isEmail().withMessage('Debe completar el campo email con un correo eléctronico válido'),
  body('password').notEmpty().withMessage('Debe ingresar una contraseña)'),
  body('rol').notEmpty().isNumeric().withMessage('Debe seleccionar un rol'),
]

module.exports = validationsUsers