const db = require('../database/models')

const productsModel = {

    findAll:()=>{
        return db.products  // nombre de la tabla en da db
                   .findAll()
                   .then((item)=>item)
                   //.then((item)=>console.log(item))
                   .catch(err => console.error(err))
         
     },
     findOne:(id)=>{
       return  db.products
                 .findByPk(id)
                 .then((item)=>item)
                    //.then((item)=>console.log(item))
                 .catch(err => console.error(err))
         
         
     }, 
     create:(producto)=>{
       return  db.products.create(producto)
             .then((item)=>item)
             .catch(err => console.error(err))         
     },
     update:(producto, id)=>{
       return  db.products.update(producto,{
             where:{
                 id: id
             }})
             .then((item)=>item)
             .catch(err => console.error(err))         
     },
     delete:(id)=>{
         return  db.products.destroy({
             where:{
                 id: id
             }})
 
             .then((item)=>item)
             .catch(err => console.error(err))
         
     
     },
 }

 //productsModel.findAll() 

module.exports =  productsModel 


