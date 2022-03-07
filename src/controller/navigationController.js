const model = require('../model');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const bcryptjs = require('bcryptjs');
const {
    validationResult, body
} = require('express-validator');

const navigationController = {
    getHome: (req, res, next) => {
        model.product.findAll().then(item => {
            res.render('index', {
                title: "Parfum Légende", // muestra los datos de los productos en la vista Principal(/)
                data: item
            })
        }).catch(err => next(err))
    },

    getAdmin: (req, res, next) => {

        res.render('administrar') // muestra los datos de los productos en la vista Principal(/admin)

    },

    getDetalle: (req, res) => {
        model.product.findOne(req.params.id)
            .then(function (item) {
                res.render('products/detailProduct', {
                    data: item
                })
            })

    },

    login: (req, res, next) => {
        res.render('login')
            .catch(err => next(err))
    },
    guardar: (req, res, next) => {

        model.user.create({
            name: req.body.nombre,
            lastname: req.body.apellidos,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : '',
            roles_id: '2',
        })
            .then(function (item) {
                res.redirect('/login')
            })
            .catch(err => next(err))
    },
    register: (req, res, next) => {
        res.render('register')
            .catch(err => next(err))
    },


    ingresar2: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login'), {
                errors: resultValidation.mapped(),
                oldData: req.body,
            }
        } else {
            model.user.findByEmail(req.body.email)
                .then(function (item) {
                    let usuario= item[0]
                    

                    if(usuario){
                        const passwordOk = bcryptjs.compareSync(req.body.password, usuario.password); // Hasheo de la contraseña
                        if(passwordOk){
                            res.send( item[0].name +"logueado...")
                        }
                        else{
                            res.redirect('/login')
                        }
                    }

                })


        }

    },

        // ingresar: (req, res, next) => {
        //     let resultValidation = validationResult(req);
        //     if (resultValidation.errors.length > 0) {
        //         return res.render('login'), {
        //             errors: resultValidation.mapped(),
        //             oldData: req.body,
        //         }

        // else {

        //         model.user.findByEmail(req.body.email)
        //             .then(function (item) {
        //                 let usuarioLogueado = item[0];

        //                 if (usuarioLogueado) {
        //                     const passwordOk = bcryptjs.compareSync(req.body.password, usuarioLogueado.password); // Hasheo de la contraseña
        //                     if (passwordOk) {
        //                         delete usuarioLogueado.password;
        //                         //req.session.usuario = usuarioLogueado;
        //                         //req.session.isUserLogged = true;
        //                         // cookies 
        //                         if (req.body.recordarme) {
        //                             res.cookie('email', req.body.email, {
        //                                 maxAge: 1000 * 60 * 3
        //                             });
        //                         }
        //                         return res.redirect('/admin');
        //                     }
        //                 } else {
        //                     res.render('login'), {
        //                         errors: {
        //                             email: {
        //                                 msg: 'Las credenciales son inválidas',
        //                             },
        //                         },
        //                     };
        //                 }
        //             } 
        //     }
        // },
    // validaciones



    logout: (req, res, next) => {
        /*pendiente */
        res.redirect('/')
            .catch(err => next(err))
    }


}


module.exports = navigationController