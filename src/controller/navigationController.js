const model = require('../model');
const req = require('express/lib/request');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const navigationController = {
    getHome: (req, res, next) => {
        console.log(req.session)
        


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

        let errors = validationResult(req)
        if(errors.errors.length>0){
            return res.render('/register')
        }
        else{
            
        model.user.create({
            name: req.body.nombre,
            lastname: req.body.apellidos,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : '',
            roles_id: '2',
        })
            .then(function (item) {
                res.redirect('/login')
            })
            .catch(err => next(err))
        }

    },
    register: (req, res, next) => {
        res.render('register')
            .catch(err => next(err))
    },


    ingresar: (req, res) => {
        
        let errors = validationResult(req)
        if(errors.errors.length>0){
            return res.render('login')
        }
        else{
         model.user.findByEmail(req.body.email)
         .then(item=>{
             let usuario = item[0]
          
             if (usuario) {
                const passwordOk = bcryptjs.compareSync(req.body.password, usuario.password); // Hasheo de la contraseña
                if (passwordOk) {
                    
            //Como podemos modificar nuestros req.body
            //delete usuario['password']
            req.session.usuario = usuario
                    console.log("usuaario logueado"+ req.session.usuario)
                    res.redirect('/')
                }
                else {
                    res.redirect('/login')
                }
            }
            })
            
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/');
    },
    
    totalCategories: (req, res) => {
        model.user.totalcategories().then(item => {
            console.log(item);
            res.send(item)
        }).catch(err => next(err))
    },
    productCart: (req, res) => {
        res.render('productCart');
    }
}



module.exports = navigationController