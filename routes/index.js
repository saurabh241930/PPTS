var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/User');
var Request = require('../models/Request');

var Branch = require('../models/Branch');





router.get('/', function(req, res) {
  res.render('index')
});



router.get('/apply',function(req,res){
      Branch.find({},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('applyForm',{branches:branches});
        }
  })
})


router.post('/apply/:id',function(req,res){
      User.findById(req.params.id,function(err,user){
    if (err) {
      console.log(err);
    } else {
      
     Branch.findById(req.body.preference1,function(err,branch){
       if (err) {
        console.log(err)
      } else {
        
        var newRequest = {
          id:user._id,
          username:user.username,
          fullName:user.fullName,
          Location:user.Location,
          email:user.email,
          profileImage:user.profileImage,
          requestedBranch:{
            Location:branch.Location,
            id:branch._id,
            BranchName:branch.BranchName
          }
        }
        
        
        Request.create(newRequest,function(err,newestRequest){
          if (err) {
            console.log(err)
          } else {
            
            user.request.preference1.id = req.body.preference1;
            user.save()
            
          }
        })
        
        
      }
     }) 
      
      
      
        }
  })
})



router.get('/homepage', function(req, res) {
  res.render('homepage')
});


router.get('/branches/Vasai',function(req,res){
      Branch.find({'Location':'Vasai'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Vasai"});
        }
  })
})

router.get('/branches/Nalasophara',function(req,res){
      Branch.find({'Location':'Nalasophara'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Nalasophara"});
        }
  })
})

router.get('/branches/Virar',function(req,res){
      Branch.find({'Location':'Virar'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Virar"});
        }
  })
})

router.get('/branches/Vaitarna',function(req,res){
      Branch.find({'Location':'Vaitarna'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Vaitarna"});
        }
  })
})

router.get('/branches/Saphale',function(req,res){
      Branch.find({'Location':'Saphale'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Saphale"});
        }
  })
})

router.get('/branches/KelvaRoad',function(req,res){
      Branch.find({'Location':'KelvaRoad'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"KelvaRoad"});
        }
  })
})


router.get('/branches/Palghar',function(req,res){
      Branch.find({'Location':'Palghar'},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('branchesPage',{branches:branches,location:"Palghar"});
        }
  })
})








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