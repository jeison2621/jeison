const model = require('../model')


const navigationController ={
    getHome : (req, res , next) => {
        model.product.findAll().then(item=>{
            res.render('index',{title: "Parfum Légende",// muestra los datos de los productos en la vista Principal(/)
                                data:item})
        }).catch(err => next(err))
    },
    getAdmin : (req,res,next)=>{
        
            res.render('administrar'    )// muestra los datos de los productos en la vista Principal(/admin)
                                
        ///////////////////////// Productos////////////////////
    },

    adminProducts : (req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('Productos',{data:item})
        }).catch(err => next(err))
    },

    createProduct : (req,res)=>{
        res.render('newProduct')
    },

    getEditProducts : (req,res,next)=>{
        model.product.findOne(req.params.id)
        .then(function(item){
            // res.send(item)
            res.render('editProduct',{data:item})
        })
        

    },


    detailProducts:(req,res)=>{
        model.product.findOne(req.params.id)
        .then(function(item){
            res.render('detailProduct',{data:item})
        })
        
    },

    editProducts: (req,res)=>{
        model.product.update(
        {
            name:           req.body.name,
            description:    req.body.description,
            image:          req.file ? req.file.filename: '',
            category:       req.body.category,
            amount:         req.body.amount,
            typeAmount:     req.body.typeAmount,
            price:          req.body.price,
            discount:       req.body.discount
       },  req.params.id)

        
         .then(function(item){
        res.redirect('/admin/products/')
        


         })
    },

    guardarProduct: (req,res)=>{
        model.product.create(
             {
                 name:           req.body.name,
                 description:    req.body.description,
                 image:          req.file ? req.file.filename: '',
                 category:       req.body.category,
                 amount:         req.body.amount,
                 typeAmount:     req.body.typeAmount,
                 price:          req.body.price,
                 discount:       req.body.discount
            }   
        )
        .then(function(item){
            res.redirect('/admin/products')
        })
        
    },

    borrarProduct: (req,res)=>{
        model.product.delete(req.params.id)
        .then(function(item){
            res.redirect('/admin/products')
        })
        
    }

}


module.exports =navigationController


