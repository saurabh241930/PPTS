var express = require('express');
var router = express.Router();
var passport = require('passport');
var methodOverride = require('method-override');
var multer = require('multer');     
var path = require('path');
var fs = require('fs');

var upload = multer({ dest: 'uploads/' });
var util = require('util');
var cloudinary = require('cloudinary');

var Branch = require('../models/Branch');
var User = require('../models/User');
var Request = require('../models/Request');




 var upload = multer({ dest: './uploads/'});



router.get('/',function(req,res){
      Branch.find({},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('index',{branches:branches});
        }
  })
})

router.get('/status',function(req,res){
  Request.find({'id':req.user._id}).sort({preference:1}).exec(function(err,requests){
    if (err) {
      console.log(err);
    } else {
      
      res.render('status',{requests:requests});
        }
  })
      
      
       
})

router.get('/homepage',function(req,res){
      Branch.find({},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('homepage',{branches:branches});
        }
  })
})

router.get('/apply',function(req,res){
      Branch.find({},function(err,branches){
    if (err) {
      console.log(err);
    } else {
      
      res.render('applyForm',{branches:branches});
        }
  })
})


router.post('/apply/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      console.log(err);
    } else {

      Branch.findById(req.body.preference1, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 1,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

            

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference2, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 2,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

             

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference3, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 3,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

      

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference4, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 4,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {


              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference5, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 5,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

        

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference6, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 6,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {


              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference7, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 7,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

           

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference8, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 8,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

         

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference9, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 9,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

             

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

      Branch.findById(req.body.preference10, function(err, branch) {
        if (err) {
          console.log(err)
        } else {

          var newRequest = {
            id: user._id,
            username: user.username,
            fullName: user.fullName,
            Location: user.Location,
            email: user.email,
            profileImage: user.profileImage,
            preference: 10,
            requestedBranch: {
              Location: branch.Location,
              id: branch._id,
              BranchName: branch.BranchName
            }
          }


          Request.create(newRequest, function(err, newestRequest) {
            if (err) {
              console.log(err)
            } else {

             

              var requestInBranch = {
                id: newestRequest._id,
                By:newRequest.fullName,
                preference: newestRequest.preference
              }

              branch.Requests.push(requestInBranch);
              branch.save()
              

            }
          })


        }
      })

    res.redirect("/homepage")


    }
  })
})

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
router.get('/register',function(req,res){
  Branch.find({},function(err,branches){
if (err) {
  console.log(err);
} else {
  
  res.render('register',{branches:branches});
    }
})
})

//Sign Up logic
router.post('/register', upload.single('profileImage'),function(req, res) {
  
  
  
  Branch.findById(req.body.branchId,function(err,branch){
    if (err) {
      console.log(err)
    } else {
      
       var newUser = new User({
    username: req.body.username,
    fullName: req.body.fullName,
       email: req.body.email,
  currentBranch:{
           id:branch._id,
           BranchName:branch.BranchName,
           Location:branch.Location
         } 
  })
       
       User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    } else {
      passport.authenticate("local")(req, res, function() {
        
      })
    }
       
        var newMember = {
          id:user._id,
          username:user.username,
          fullName:user.fullName,
          email:user.email,
          profileImage:user.profileImage
        } 
        
        branch.Members.push(newMember);
         branch.save()
         
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
      res.redirect("/createBranch")
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