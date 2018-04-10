require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var passport = require('./config/passportConfig');

//model for supply list - this is populated into the database from the seeder file supply.js
var Supply = require('./models/supply');
var User = require('./models/user');

//this next line populates the database
// var seeed = require('./seeder/supply')

// Mongoose stuff
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mernJwtAuth');
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});


var auth = require('./routes/auth');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'client', 'build', 'public')));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// Do we still need this?
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});

app.use('/auth', auth);

// Get all supply list data from database, will pass on to supplylist.js component
// also used by the Eventearthquake and other event routes
app.get('/api/supplylist', (req, res) => {
  console.log("You've hit the API to find all supplies");
  // Find all supplies
  Supply.find({}, function(err, supplylist) {
    if (err) {
      console.log("There was a db error");
      res.send(err);
    } else {
      console.log("Got supplylist from DB!")
      // This is the raw array of supply list objects
      res.send(supplylist);
    }
  });
});

//this pulls the user data for the userlist component
app.get('/api/userlist', (req, res) => {
  console.log("You've hit the API to find all supplies");
  // Find all supplies
  User.findOne({ email: req.body.user.email }, {supplies}, function (err, person) {
    if (err) return (err);
    console.log('we hit the user findOne route')
  });
});


app.post('/addsupplies', (req, res) => {
  console.log("In the add supplies route")
  User.find({email: req.body.user.email}, function(err, user) {
    User.findOneAndUpdate(
      { email: req.body.user.email},
      {$push: {supplies: req.body.item}},
      {upsert: true},
     function(err, result) {
      // console.log(result)
    })
  })
});

app.post('/deletesupplies', (req, res) => {
  console.log("In the delete supplies route")

  User.findOne({email: req.body.user.email}, function(err, user) {
    console.log("we found a user to delete supplies from");
    console.log("user: ", user);
    console.log("item name: ", req.body.item.name);
    user.supplies.forEach(function(item) {
      if (item.name === req.body.item.name) {
        user.supplies.id(item._id).remove();
      }
    });
    console.log("why is findOne running twice here?");
    user.save(function(err) {
      console.log(err)
    })
  })
});

//this next line populates the database

// app.get('/seeed', function(req, res) {
//   seeed();
//   res.send("yo seeder");
// })

app.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
