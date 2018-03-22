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
