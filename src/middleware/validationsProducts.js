const { body } = require('express-validator');

const validationsProducts = [
  body('name').notEmpty().withMessage('Debe completar el campo nombre(s)'),
  body('description').notEmpty().withMessage('Debe completar el campo descripción'),
  body('category').notEmpty().isNumeric().withMessage('Debe seleccionar una categoría'),
  body('amount').notEmpty().isDecimal().withMessage('Debe completar el campo cantidad'),
  body('typeAmount').notEmpty().isNumeric().withMessage('Debe seleccionar un tipo de cantidad'),
  body('price').notEmpty().isDecimal().withMessage('Debe completar el campo de precio'),
  body('discount').notEmpty().isNumeric().withMessage('Debe seleccionar un descuento'),
]

module.exports = validationsProducts