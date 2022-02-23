const model = require('../model')


const navigationController ={
    getHome : (req, res , next) => {
        model.product.findAll().then(item=>{
            res.render('index',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/)
                                data:item})
        }).catch(err => next(err))

    },
    getAdmin : (req,res,next)=>{
        
            res.render('administrar',{title: "Fran Generator"})// muestra los datos de los productos en la vista Principal(/admin)
                                
        
        

    },

    adminProducts : (req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('Productos',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/admin)
                                data:item})
        }).catch(err => next(err))
        

    },
    createProduct : (req,res)=>{
        res.render('newProduct',{title:"Fran Generato"})

    },
    editProducts : (req,res,next)=>{
        res.render('editProduct')


    }
        // model.product.findAll().then(item=>{
        //     res.render('Productos',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/admin)
        //                         data:item})
        // }).catch(err => next(err))
        

    
    
}
module.exports =navigationController


