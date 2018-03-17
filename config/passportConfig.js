var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleUser = require('../models/googleUser');

// returns a new id for THIS user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  GoogleUser.findById(id, function(err, user) {
    done(err, user);
  })
});

// these functions make the google auth happen (the google strategy)
// this takes 3 parameters
// this is where google will send the authenticated user back to (the route is the URL)
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    GoogleUser.findOne({ 'googleId': profile.id }, function(err, user){
      if (err)
        return done(err);
      if (user) {
        /// If a user is found, log them in
        return done(null, user)
      } else {
        // create a new google Google User
        // pulls the model GoogleUser, makes a copy of it's constructor object
        // then newUser will fill that object in
        var newUser = new GoogleUser();
        newUser.googleId = profile.id;
        newUser.displayName = profile.displayName;

        newUser.save(function(err) {
          if (err) {
            throw err;
          }
          return done(null, newUser)
        })
      }
    })
  }
));

module.exports = passport;
