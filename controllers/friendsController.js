const db = require("../models");

//Define controller methods for Friend
module.exports = {
    findAll: function(req, res) {
        db.Friend
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => releaseEvents.status(422).json(err))
    },
    findById: function(req, res) {
        db.Friend   
            .findById(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Friend
            .create(req.body) 
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Friend   
            .findOneAndUpdate({ _id: req.params.id }, body)
            .then(dbModel => res.json(dbMoel))
            .catch(err => res.status(422).json(err))
    },
    delete: function(req, res) {
        db.Friend   
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.deleteOne())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};

//find all route to list all friends
//find all route for favorites
//create new friend route
//delete friend route
//update friend route for updating friend details (gifts? occasions?)