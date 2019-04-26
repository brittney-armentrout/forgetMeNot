const db = require("../models");

//Define controller methods for User
module.exports = {
    //find all friends
    findAll: function(req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    //not sure if we need these??
    // findById: function(req, res) {
    //     db.User   
    //         .findById(req.query)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // },
    // create: function(req, res) {
    //     db.User
    //         .create(req.body) 
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // },
    // update: function(req, res) {
    //     db.User   
    //         .findOneAndUpdate({ _id: req.params.id }, body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // },
    // delete: function(req, res) {
    //     db.User  
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.deleteOne())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // }
}