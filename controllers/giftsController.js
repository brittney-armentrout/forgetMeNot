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
        const gift = req.body.gift;
        const friendID = req.body.friendSelect;
        db.Gift
            .create({gift: gift}) 
            .then(dbGift => db.Friend.findByIdAndUpdate({
                _id: friendID
            },
            {
                $push: {
                    gifts: dbGift._id
                }
            },{
                new:true
            })
            )
            .then(dbGift => res.json(dbGift))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Gift   
            .findOneAndUpdate({ _id: req.params.id }, body)
            .then(dbModel => res.json(dbModel))
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
