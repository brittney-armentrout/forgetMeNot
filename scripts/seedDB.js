// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/forgetmenot"
// );

// const friendSeed = [
//   {
//     name: "Jane Austen",
//     address: "123 Front St, Bath, England",
//     img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg",
//     date: new Date(Date.now()),
//     isFavorite: true,
//     gifts: [{
//         gift: "new book",
//         img: "https://s1.nyt.com/du/books/images/9780553897845.jpg",
//         isStar: true
//     }],
//     occasions: [{
//         type: "wedding",
//         date: 01/01/2020
//     }]
//   },
//   {
//     name: "Gerard Butler",
//     address: "456 MyHouse Lane, Denver, CO",
//     img: "https://m.media-amazon.com/images/M/MV5BMjE4NDMwMzc4Ml5BMl5BanBnXkFtZTcwMDg4Nzg4Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
//     date: new Date(Date.now()),
//     isFavorite: true,
//     gifts: [],
//     occasions: []
//   },
//   {
//     name: "Natalie Portman",
//     address: "789 YourHouse Lane, Denver, CO",
//     img: "https://media.wmagazine.com/photos/5a132ef9211524101287c574/4:3/w_1536/natalie-portman-sexual-harassment-in-hollywood.jpg",
//     date: new Date(Date.now()),
//     isFavorite: false,
//     gifts: [],
//     occasions: []
//   }
// ];

// db.Friend
//   .deleteMany({})
//   .then(() => db.Friend.collection.insertMany(friendSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
