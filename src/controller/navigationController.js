const model = require('../model')


const navigationController ={
    getHome : (req, res , next) => {
        model.product.findAll().then(item=>{
            res.render('index',{title: "Fran Generator",// muestra los datos de los productos en la vista Principal(/)
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

    editProducts : (req,res,next)=>{
        res.render('editProduct')

    },

    guardarProduct: (req,res)=>{
        model.product.create(

             {
                 name:           req.body.name,
                 description:    req.body.description,
                 image:          req.body.image,
                 category:       req.body.category,
                 amount:         req.body.amount,
                 typeAmount:     req.body.typeAmount,
                 price:          req.body.price,
                 discount:       req.body.discount
            }
            
        );
        res.redirect('/admin/products')
    },
    detailProducts:(req,res)=>{
        model.product.findOne(req.params.id)
        .then(function(item){
            res.render('detailProduct'),{data:item}
        })
        
    }

}


module.exports =navigationController


