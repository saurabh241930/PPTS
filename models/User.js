var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({

  username: String,
  password: String,
  fullName: String,
  email: String,
  profileImage: String,
  currentBranch: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
    BranchName: String,
    Location:String
  },
  
  request:{
    preference1:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference2:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference3:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference4:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference5:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
    preference6:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference7:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference8:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference9:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
     preference10:{
      id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
      BranchName:String
    },
    
    requestedOn:{
      type: Date,
        default: Date.now
    }
  }
  

}, {
  usePushEach: true
});



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);