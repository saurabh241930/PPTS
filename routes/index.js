var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/User');
var Request = require('../models/Request');

var Branch = require('../models/Branch');





router.get('/', function(req, res) {


  res.render('index')


});








router.get('/homepage', function(req, res) {
  res.render('homepage')
});















//////////////////////////////////////////AUTH ROUTES////////////////////////////////////////
//register
router.get('/register', function(req, res) {
  res.render('register');
});

//Sign Up logic
router.post('/register', function(req, res) {
  var newUser = new User({
    username: req.body.username
  });




  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect('/');
      })
    }

  })

});


/////////////////////Login route///////////////////////////
// router.get('/login',function(req,res){
// res.render('login');
// });

//login logic
// app.post('/login',middleware,callback)
router.post('/login', passport.authenticate("local", {
  successRedirect: "/homepage",
  failureRedirect: "/"
}), function(req, res) {

});


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


router.get('/createBranch', function(req, res) {
  res.render('addBranch')
});

router.post('/createBranch', function(req, res) {

  var newBranch = {
    Location: req.body.Location,
    BranchName: req.body.BranchName,
    TotalSeats: req.body.TotalSeats,
  }
  
  
  Branch.create(newBranch,function(err,branch){
    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }
  })
  
});

////////////////// #### Middleware ##### for checking if user is logged in or not//////////////////////////////////////
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {

    res.render('login');
  }
}


module.exports = router;