const model = require('../model')
const { validationResult } = require('express-validator')

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

        ///////////////////////// Productos////////////////////
    },
    login: (req, res, next) => {
        res.render('login')
            .catch(err => next(err))
    },
    register: (req, res, next) => {
        res.render('register')
            .catch(err => next(err))
    },
    adminProducts: (req, res, next) => {
        model.product.findAll().then(item => {
            res.render('products/Productos', { data: item })
        }).catch(err => next(err))
    },

    createProduct: (req, res) => {
        res.render('products/newProduct')
    },

    getEditProducts: (req, res, next) => {
        model.product.findOne(req.params.id)
            .then(function (item) {
                res.render('products/editProduct', { data: item })
            })
    },


    detailProducts: (req, res) => {
        model.product.findOne(req.params.id)
            .then(function (item) {
                res.render('products/detailProduct', { data: item })
            })
    },

    editProducts: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            model.product.update(
                {
                    name: req.body.name,
                    description: req.body.description,
                    image: req.file ? req.file.filename : '',
                    category: req.body.category,
                    amount: req.body.amount,
                    typeAmount: req.body.typeAmount,
                    price: req.body.price,
                    discount: req.body.discount
                }, req.params.id)

                .then(function (item) {
                    res.redirect('/admin/products/')
                })
        }
    },

    guardarProduct: (req, res) => {
        let errors = validationResult(req);
        res.send(errors)
        // if (errors.isEmpty()) {
        //     model.product.create(
        //         {
        //             name: req.body.name,
        //             description: req.body.description,
        //             image: req.file ? req.file.filename : '',
        //             category: req.body.category,
        //             amount: req.body.amount,
        //             typeAmount: req.body.typeAmount,
        //             price: req.body.price,
        //             discount: req.body.discount
        //         }
        //     )
        //         .then(function () {
        //             res.redirect('/admin/products')
        //         })
        // } else {
        //     res.render('products/newProduct', { errors: errors.array() })
        // }
    },

    borrarProduct: (req, res) => {
        model.product.delete(req.params.id)
            .then(function (item) {
                res.redirect('/admin/products')
            })
    },
    newUser: (req, res, next) => {
        res.render('user/newUser')
    },
}

module.exports = navigationController