const productController ={
    home:(req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('index', {data: item})
        })
        .catch(err => next(err))
    }
}

module.exports =productController