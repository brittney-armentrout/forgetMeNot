const db = require("../models");

//Define controller methods for Gifts
module.exports = {
    findAll: function(req, res) {
        db.Gift
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => releaseEvents.status(422).json(err))
    },
    findById: function(req, res) {
        db.Gift   
            .findById(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Gift
            .create(req.body) 
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Gift   
            .findOneAndUpdate({ _id: req.params.id }, body)
            .then(dbModel => res.json(dbMoel))
            .catch(err => res.status(422).json(err))
    },
    delete: function(req, res) {
        db.Gift   
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.deleteOne())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};
