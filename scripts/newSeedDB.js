const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/forgetmenot"
);

const userSeed = [
  {
    name: "Katie",
    username: "katie12345"
    friends : [
        {
        name: "Jane",
        address: "123 Front St, Bath, England",
        img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg",
        isFavorite: true,
        gifts: [
            {
                gift: "new book",
                img: "https://s1.nyt.com/du/books/images/9780553897845.jpg",
                isStar: true
            },
            {
                gift: "new gown",
                img: "https://images-na.ssl-images-amazon.com/images/I/41APuT1uTNL._UX385_.jpg",
                isStar: false
            }
            ],
        occasions: [
            {
                type: "wedding",
                date: 01/01/2020
            },
            {
                type: "birthday",
                date: 05/05/1982
            }
            ]
        },
        {
            name: "George",
            address: "345 Curious St, Detroit, MI",
            img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Curious_George.png",
            isFavorite: true,
            gifts: [
                {
                    gift: "banana",
                    img: "https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Health/April/CR-Health-Inlinehero-bananas-good-for-you-0418",
                    isStar: true
                },
                {
                    gift: "tricycle",
                    img: "https://images-na.ssl-images-amazon.com/images/I/81Xy1ArTyUL._SX425_.jpg",
                    isStar: false
                }
                ],
            occasions: [
                {
                    type: "birthday",
                    date: 04/05/2016
                },
                {
                    type: "adoption anniversary",
                    date: 08/09/2017
                }
                ] 
        }
    ]


db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
