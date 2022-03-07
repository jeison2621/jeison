const model = require('../model')

const apiController = {
    apiusers: (req, res, next) => {
        model.user.findAll().then(item => {
            let usersJson = []
            item.forEach(user => {
                usersJson.push({
                    id: user.dataValues.id,
                    name: user.dataValues.name,
                    lastname: user.dataValues.lastname,
                    email: user.dataValues.email,
                    detail: 'https://s3-parfum-legende.herokuapp.com/api/users/' + user.dataValues.id
                })
            })
            return res.status(200).json({
                count: item.length,
                status: 200,
                users: usersJson
            })
        }).catch(err => next(err))
    },
    detailuser: (req, res, next) => {
        model.user.findOne(req.params.id).then(item => {
            let usersJson = []
            usersJson.push({
                id: item.id,
                name: item.name,
                lastname: item.lastname,
                email: item.email,
                avatar: 'https://s3-parfum-legende.herokuapp.com/img/users/' + item.avatar
            })

            return res.status(200).json({
                status: 200,
                user: usersJson
            })
        }).catch(err => next(err))
    },
    apiproducts: (req, res, next) => {
        model.product.findAll().then(item => {
            let productsJson = []
            item.forEach(product => {
                productsJson.push({
                    id: product.dataValues.id,
                    name: product.dataValues.name,
                    description: product.dataValues.description,
                    category: [product.dataValues.category],
                    detail: 'https://s3-parfum-legende.herokuapp.com/api/products/' + product.dataValues.id
                })
            })

            return res.status(200).json({
                count: item.length,
                status: 200,
                products: productsJson
            })
        }).catch(err => next(err))
    },
    detailproduct: (req, res, next) => {
        model.product.findOne(req.params.id).then(item => {
            let productJson = []
            productJson.push({
                id: item.id,
                name: item.name,
                description: item.description,
                amount: item.amount,
                typeAmount: item.typeAmount,
                price: item.price,
                discount: item.discount,
                category: [
                    item.category
                ],
                image: 'https://s3-parfum-legende.herokuapp.com/img/products/' + item.image
            })

            return res.status(200).json({
                status: 200,
                product: productJson
            })
        }).catch(err => next(err))
    },
    searchusers: (req, res, next) => {
        //res.send('search u')
        console.log(req.query);
        model.user.search('Die').then(item => {
            return res.status(200).json({
                count: item.length,
                status: 200,
                user: item
            })
        }).catch(err => next(err))
    },
    searchproducts: (req, res, next) => {
        model.product.findAll().then(item => {
            return res.status(200).json({
                count: item.length,
                status: 200,
                users: item
            })
        }).catch(err => next(err))
    }
}

module.exports = apiController