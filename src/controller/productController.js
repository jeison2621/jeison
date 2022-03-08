const model = require('../model')

const productController = {


     buscadorProducts: (req, res, next) => {
          model.Product.findAll({
               where: { [Op.like]: 'b%' }
          })
               .then(item => { console.log(item) })

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

     guardarProduct: (req, res) => {
          model.product.create(
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
                    res.redirect('/admin/products')
               })

     },

     borrarProduct: (req, res) => {
          model.product.delete(req.params.id)
               .then(function (item) {
                    res.redirect('/admin/products')
               })

     }
}
module.exports = productController