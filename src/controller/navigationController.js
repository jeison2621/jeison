const model = require('../model')


const navigationController ={
    getHome : (req, res , next) => {
        model.product.findAll().then(item=>{
            res.render('index',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/)
                                data:item})
        }).catch(err => next(err))

    },
    getAdmin : (req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('administrar',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/admin)
                                data:item})
        }).catch(err => next(err))
        

    },
    createProducto : (req,res)=>{
        res.render('newProduct',{title:"Fran Generato"})

    }
}
module.exports =navigationController


