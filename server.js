const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const passportSetup = require('./config/passport-setup')
require('dotenv').config();
const passport = require('passport');
var cors = require('cors');

// const bodyParser = require('body-parser');
// const path = require("path");
// const crypto = require('crypto');
// const multer = require('multer');
// const methodOverride = require('method-override');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');

const app = express();
const PORT = process.env.PORT || 3001;

//enable cors
app.use(cors());


// Define middleware here
// app.use(bodyParser.json());
// app.use(methodOverride('_method')); //to be used for deleting gifts
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Passport Middleware
app.use(passport.initialize());
//Passport Config
require("./config/passport")(passport);
// app.use(passport.session());

// Define API routes here
app.use(routes);

// const LOCAL_URI = "mongodb://localhost/forgetmenot"; 

// Connect to Mongo 
// const conn = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/forgetmenot", { useNewUrlParser: true });
// const conn = mongoose.createConnection(LOCAL_URI);

// Initialize gridFs
// let gfs;

// conn.once('open', () => {
//   console.log('Connection Open');
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// Create storage engine
// const storage = new GridFsStorage({
//   url: LOCAL_URI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => { 
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads' //needs to match promise name on line 53
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });

// const upload = multer({ storage });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/forgetmenot", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});