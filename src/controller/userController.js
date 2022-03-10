const model = require('../model')
const bcryptjs = require('bcryptjs');

const userController = {
    adminUsers: (req, res, next) => {
        model.user.findAll().then(item => {
            res.render('user/users', { data: item })
        }).catch(err => next(err))
    },
    newUser: (req, res, next) => {
        res.render('user/newUser')
                    
    }, 
    createUser: (req, res) => {
        console.log(req.body)
        model.user.create(
            {
                name: req.body.nombre,
                lastname: req.body.apellidos,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file ? req.file.filename: '',
                roles_id: req.body.rol,
            }
        )
            .then(function (item) {
                res.redirect('/admin/users')
            })
    },
    getEditUsers: (req, res, next) => {
        model.user.findOne(req.params.id)
            .then(function (item) {
                res.render('user/editUser', { data: item })
            })
    },
    detailUser: (req, res) => {
        model.user.findOne(req.params.id)
            .then(function (item) {
                res.render('user/detailUser', { data: item })
            })
    },
    editUsers: (req, res, next) => {
        console.log(req.body);
        model.user.update(
            {
                name: req.body.nombre,
                lastname: req.body.apellidos,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file ? req.file.filename: '',
                roles_id: req.body.rol,
            }, req.params.id)
            
            .then(function (item) {
                res.redirect('/admin/users/')
            })
    },
    borrarUser: (req, res) => {
        model.user.delete(req.params.id)
            .then(function (item) {
                res.redirect('/admin/users')
            })
    }
}

module.exports = userController