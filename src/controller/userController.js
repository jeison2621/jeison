const model = require('../model')

const userController = {
    adminUsers: (req, res, next) => {
        model.user.findAll().then(item => {
            res.render('user/users', { data: item })
        }).catch(err => next(err))
    },
    newUser: (req, res, next) => {
        res.render('user/newUser')
    },
    // Los que siguen están en TESTING
    createUser: (req, res) => {
        //PRUEBA
        console.log("-------------------");
        console.log(req.body);
        console.log("-------------------");
        
        model.user.create(
            {
                name: 'Diego',
                lastname: 'Duque',
                email: 'diegomduque@h.com',
                password: '0000',
                avatar: '',
                roles_id: '1',
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
    detailUsers: (req, res) => {
        model.user.findOne(req.params.id)
            .then(function (item) {
                res.render('user/editUser', { data: item })
            })

    },
    editUsers: (req, res, next) => {
        model.user.findOne(req.params.id)
        res.send('Editar Usuario PRUEBA')
            .then(function (item) {
                res.redirect('/user/users')
            })
    },

    guardarUser: (req, res) => {
        model.user.create(
            {
                name: req.body.name,
                description: req.body.description,
                image: req.file ? req.file.filename : '',
                category: req.body.category,
                amount: req.body.amount,
                typeAmount: req.body.typeAmount,
                price: req.body.price,
                discount: req.body.discount
            }
        )
            .then(function (item) {
                res.redirect('/user/users')
            })
    },
    borrarUser: (req, res) => {
        model.user.delete(req.params.id)
            .then(function (item) {
                res.redirect('/user/users')
            })
    }
}

module.exports = userController