const req = require('express/lib/request');
const db = require('../database/models')
const Op = db.Sequelize.Op;

const usersModel = {

    findAll: () => {
        return db.users
            .findAll({ 
               order:[['id','DESC']]
            })
            .then((item) => item)
            .catch(err => console.error(err))

    },
    findOne: (id) => { 
        return db.users
            .findByPk(id)
            .then((item) => item)
            .catch(err => console.error(err))
    },  
    create: (usuario) => {
        return db.users.create(usuario)
            .then((item) => item)
            .catch(err => console.error(err))
    },    

    update: (usuario, id) => {
        return db.users.update(usuario, {
            where: {
                id: id
            }
        })
            .then((item) => item)
            .catch(err => console.error(err))
    },
    delete: (id) => {
        return db.users.destroy({
            where: {
                id: id
            }
        })
            .then((item) => item)
            .catch(err => console.error(err))
    },
    findByEmail: (email) => {
        return db.users.findAll({
            where: {
                email: email
            }
        })
            .then((item) => item)
            .catch(err => console.error(err))
    },
    search: (user) => {
        return db.users.findAll({
            where: {
                name: {
                    [Op.like]: '%' + user + '%'
                }
            }
        })
            .then((item) => item)
            .catch(err => console.error(err))
    },
    totalcategories: () => {
        return db.users.findAll({
            attributes: ["category"],
            group: "category",
        })
            .then((item) => item)
            .catch(err => console.error(err))
    },
}

module.exports = usersModel