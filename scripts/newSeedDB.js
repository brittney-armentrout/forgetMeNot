const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forgetmenot");

const userSeed = [
//first user
    {
    name: "Katie",
    email: "katie@mail.com",
    friends: [
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
    },
//second user
{
    username: "Brit1234@gmail.com",
    userID: "113309600017687291888", 
    friends: [
        {
        name: "Shakers",
        address: "Golden",
        img: "https://www.https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        isFavorite: true,
        gifts: [
            {
                gift: "mouse",
                img: "https://images-na.ssl-images-amazon.com/images/I/81duBN7UdEL._SX425_.jpg",
                isStar: true
            },
            {
                gift: "squirt bottle",
                img: "https://www.invisiblemask.com/imask/image/cache/catalog/main%20images/squirtbottle-500x500.jpg",
                isStar: false
            }
            ],
        occasions: [
            {
                type: "vet day",
                date: 01/20/2020
            },
            {
                type: "birthday",
                date: 07/26/2007
            }
            ]
        },
        {
            name: "Laurie Mom",
            address: "Eugene, OR",
            img: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-1/13010595_501907583349903_7410876517270699835_n.jpg?_nc_cat=106&_nc_ht=scontent.fapa1-1.fna&oh=5b8e3d1674e35443405aa86607816dc6&oe=5D74CC17",
            isFavorite: true,
            gifts: [
                {
                    gift: "vacation",
                    img: "https://www.classicvacations.com/sites/default/files/main-hawaii-pool_0.jpg",
                    isStar: true
                },
                {
                    gift: "wine",
                    img: "https://assets.personalwine.com/assets/frontend/examples/redwine_etch_corporate+holiday-11e73f3999f716ff1971be76625242dac0fde9479d989591f9315aec3ccb12fd.png",
                    isStar: false
                }
                ],
            occasions: [
                {
                    type: "birthday",
                    date: 09/10/1962
                },
                {
                    type: "mother's day",
                    date: 05/12/2019
                }
            ] 
        } 
    ]  
    },    
//3rd user  
{
    username: "Matt1234@gmail.com",
    userID: "113309600017687291857", 
    friends: [
        {
        name: "Fivel",
        address: "somewhere west",
        img: "http://byrdtheatre.org/byrdtheatrefoundation/wp-content/uploads/2017/06/Fievel.jpg",
        isFavorite: true,
        gifts: [
            {
                gift: "cheese",
                img: "https://amp.businessinsider.com/images/5b8592ba89c8a1d6218b4a36-750-563.jpg",
                isStar: true
            },
            {
                gift: "water gun",
                img: "https://newcontent.westmarine.com/content/images/catalog/large/15203912_LRG.jpg",
                isStar: false
            }
            ],
        occasions: [
            {
                type: "anniversary",
                date: 08/27/2019
            },
            {
                type: "birthday",
                date: 01/15/1987
            }
            ]
        },
        {
            name: "Mary",
            address: "Canada",
            img: "https://www.1310news.com/wp-content/blogs.dir/sites/4/2016/10/13/Canadian-Woman.jpg",
            isFavorite: true,
            gifts: [
                {
                    gift: "champagne",
                    img: "https://dydza6t6xitx6.cloudfront.net/ci-wycliff-brut-california-champagne-210633e0397fa167.png",
                    isStar: true
                },
                {
                    gift: "wine",
                    img: "https://assets.personalwine.com/assets/frontend/examples/redwine_etch_corporate+holiday-11e73f3999f716ff1971be76625242dac0fde9479d989591f9315aec3ccb12fd.png",
                    isStar: false
                }
                ],
            occasions: [
                {
                    type: "birthday",
                    date: 11/11/1980
                },
                {
                    type: "wedding",
                    date: 09/01/2019
                }
            ] 
        } 
    ]  
    }  
];


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


  