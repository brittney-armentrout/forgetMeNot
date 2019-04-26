const db = require("../models");

//Define controller methods for Occasions
module.exports = {
    findAll: function(req, res) {
        db.Occasion
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => releaseEvents.status(422).json(err))
    },
    findById: function(req, res) {
        db.Occasion   
            .findById(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Occasion
            .create(req.body) 
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Occasion   
            .findOneAndUpdate({ _id: req.params.id }, body)
            .then(dbModel => res.json(dbMoel))
            .catch(err => res.status(422).json(err))
    },
    delete: function(req, res) {
        db.Occasion   
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.deleteOne())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};
