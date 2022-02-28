const model = require('../model')

const userController = {
    //FUNCIONA ///////////////
    adminUsers: (req, res, next) => {
        model.user.findAll().then(item => {
            res.render('user/users', { data: item })
        }).catch(err => next(err))
    },
    //FUNCIONA ///////////////
    newUser: (req, res, next) => {
        res.render('user/newUser')
    },
    //FUNCIONA ///////////////
    createUser: (req, res) => {
        model.user.create(
            {
                name: req.body.nombre,
                lastname: req.body.apellidos,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.image,
                roles_id: req.body.rol,
            }
        )
            .then(function (item) {
                res.redirect('/admin/users')
            })
    },
    //FUNCIONA ///////////////
    getEditUsers: (req, res, next) => {
        model.user.findOne(req.params.id)
            .then(function (item) {
                res.render('user/editUser', { data: item })
            })
    },


    detailUsers: (req, res) => {
        model.user.findOne(req.params.id)
            .then(function (item) {
                res.render('user/editUser', { data: item })
            })
    },
    editUsers: (req, res, next) => {
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
    },

    
    //FUNCION,A ///////////////
    borrarUser: (req, res) => {
        model.user.delete(req.params.id)
            .then(function (item) {
                res.redirect('/admin/users')
            })
    }
}

module.exports = userController