const { body, validationResult } = require('express-validator');

const validationNewProduct = [
  body('name', 'Ingrese el nombre'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      console.log(errors);
    }
  }
]

const validationLogin = [
  body('email')
    .exists()
    .isEmail()
    .isEmpty()
    .withMessage('Agregar un email válido'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener mínimo de 6 carácteres'),

  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errores = validationResult(req)
    if (!errores.isEmpety()) {
      console.log(errores);
      const valores = req.body
      return errores.array()
    }
  },

  // body('email').custom( (value) =>{
  //   for (let i = 0; i < archivoUsuarios.length; i++) {
  //       if (archivoUsuarios[i].email == value) {
  //           return true; 
  //       }
  //   }
  //   return false
  // }).withMessage('Usuario no se encuentra registrado...'),

  //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
  //     body('password').custom( (value, {req}) =>{
  //         for (let i = 0; i < archivoUsuarios.length; i++) {
  //             if (archivoUsuarios[i].email == req.body.email) {
  //                 if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
  //                   return true;
  //                 }else{
  //                   return false;
  //                 }
  //             }
  //         }

  //     }).withMessage('Usuario o contraseña no coinciden'),
]

//Aquí armo las validaciones del Registro
const validationRegister = [
  //Incorporando otras validaciones 
  body('name').isLength({
    min: 3
  }).withMessage('El campo de nombre(s) no puede estar vacío'),
  body('lastname')
    .isLength({
      min: 1
    }).withMessage('El campo apellidos no puede estar vacío'),
  body('email').isEmail().withMessage('Agregar un email válido'),

  //Aquí valido el Password   
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),

  //Aquí obligo a que el usuario seleccione su avatar
  body('avatar').custom((value, { req }) => {
    if (req.file != undefined) {
      return true;
    }
    return false;
  }).withMessage('Debe elegir su imagen de perfil. Debe ser un archivo con formato: .JPG, JPEG, GIF ó PNG')
]

module.exports = { validationLogin, validationRegister, validationNewProduct }