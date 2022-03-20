const model = require('../model')

const apiController = {
    api: (req, res, next) => {
        return res.status(200).json({
            status: 200,
            apis: ['https://s3-parfum-legende.herokuapp.com/api/users/', 'https://s3-parfum-legende.herokuapp.com/api/products/']
        })
            .catch(err => next(err))
    },
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
            return res.status(200).json([
                {
                    count: item.length
                }, 
                    usersJson
            ])
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
                    category: product.dataValues.category,
                    detail: 'https://s3-parfum-legende.herokuapp.com/api/products/' + product.dataValues.id
                })
            })

            //Totalizando categorías (falta tabla !!!)
            let totalCategories = 0;
            let cuenta = []
            productsJson.forEach(element => {
                let category = element.category[0]

                if (element.category[0] != cuenta.find(item => item == category)) {
                    totalCategories++
                }
                cuenta.push(element.category[0])
            });

            //Totalizando tipos de categorías
            let totalTypeCategories = [];
            let count = 1

            productsJson.forEach(element => {

                if (!totalTypeCategories.find(item => item.type == element.category)) {
                    totalTypeCategories.push(
                        {
                            type: element.category,
                            count: count
                        })
                }
                else {
                    totalTypeCategories.forEach(item => item.type == element.category ? item.count += 1 : item)
                }

            });

            return res.status(200).json([
                "count:", item.length,
                "status:", 200,
                "totalCategories:", totalCategories,
                "allCategories:", totalTypeCategories,
                "products:", productsJson,
                //next: 'https://s3-parfum-legende.herokuapp.com/api/products/?page='
            ])
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
                category: item.category,
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
    },
    pages: (req, res, next) => {
        model.product.pages(req.query.id).then(item => {
            res.send(item)
        }).catch(err => next(err))
    }
}

module.exports = apiController