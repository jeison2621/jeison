const model = require('../model'); 
const bcrypt = require('bcryptjs');


const navigationController = {
    getHome: (req, res, next) => {
        model.product.findAll().then(item => {
            res.render('index', {
                title: "Parfum Légende",// muestra los datos de los productos en la vista Principal(/)
                data: item
            })
        }).catch(err => next(err))
    },

    getAdmin: (req, res, next) => {

        res.render('administrar')// muestra los datos de los productos en la vista Principal(/admin)

    },

    getDetalle: (req,res)=>{
        model.product.findOne(req.params.id)
        .then(function (item) {
            res.render('products/detailProduct', { data: item })
       })

    },

    login: (req, res, next) => {
        res.render('login')
            .catch(err => next(err))
    },
    guardar:(req, res, next) => {    
        
        model.user.create(
            {
                name: req.body.nombre,
                lastname: req.body.apellidos,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file ? req.file.filename: '',
                roles_id: '2',
            }
        )
            .then(function (item) {
                res.redirect('/login')
            })
            .catch(err => next(err))
    },
    register: (req, res, next) => {
        res.render('register')
            .catch(err => next(err))
    }


}


module.exports = navigationController


