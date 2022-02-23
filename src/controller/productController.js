const data = require(".")

const productController ={
    home:(req,res,next)=>{
        model.product.findAll().then(item=>{
            res.render('index', {data: '0la desde el controlador '})
        })
        .catch(err => next(err))
    }


}






module.exports =productController