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
    pages: (page) => {
        let count = 2;
       
        if (page < 0) {
            page = 0
        } else if (page % 2) {
            
        } else {

        }

        return  db.products.findAll({
            offset: 4, limit: 2,
        })
        .then((item)=>item)
        .catch(err => console.error(err))         
    }
 }


module.exports =  productsModel