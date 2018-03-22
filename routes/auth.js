require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var passport = require('../config/passportConfig');

var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
  let hashedPass = ''
  let passwordMatch = false

  // Look up the User
  User.findOne({email: req.body.email}) // closed off the initial "query"
    .lean() // lean() is a mongoose method that modifies the query to return a javascript object instead of a mongoose object
    .exec(  // exec() executes the callback (as opposed to having it be a second parameter in the query)
      function(err, user) {
        console.log(user)
        hashedPass = user.password
        // Compare hashedPass to submitted password
        passwordMatch = bcrypt.compareSync(req.body.password, hashedPass)
        if (passwordMatch) {
          // The passwords match...
          var token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
          })
          res.send({user, token})
        } else {
          console.log("Passwords don't match")
          res.status(401).json({
            error: true,
            message: 'Email or password is incorrect'
          })
        }
    })
})

router.post('/signup', (req, res, next) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      res.redirect('/auth/signup')
    } else {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        if (err) {
          console.log("GOT AN ERROR CREATING THE USER")
          console.log(err)
          res.send(err)
        } else {
          console.log("JUST ABOUT TO SIGN THE TOKEN")
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          })
          console.log("user: ", user)
          console.log("token: ", token)
          res.json({user, token})
        }
      })
    }
  })
})

router.post('/me/from/token', (req, res, next) => {
  // Check for presence of a token
  var token = req.body.token
  if (!token) {
    console.log('no token here')
    res.status(401).json({message: "Must pass the token"})
  } else {
    jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
      console.log('inside function verify')
      console.log(token)
      if (err) {
        console.log('err is: ' + err)
        res.status(401).send(err)
      } else {
        // TODO: Why does the "_id" need to be in quotes?
        User.findById({'_id': user._id})
        .lean()
        .exec(
        function(err, user) {
          if (err) {
            console.log('err in finding user by ID: ' + err)
            res.status(401).send(err)
          } else {
            console.log('token is: ' + token)
            res.send({user, token})
          }
        })
      }
    })
  }
})

router.get('/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
  }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req,res){
    res.redirect('/');
  }
);

// this gets the user, if it exists, and sends it to the front with res.json
// this is accessing the passport user within the sessione IN THE BACKEND
// pulling from server.js
// right now the user only has the name, displayName, etc..from google profile
router.get('/user', function(req, res, next) {
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.json({ user: null });
  }
});

// this allows us to kill the session when the user logs out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;
