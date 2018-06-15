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
  
  requests:[{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request"
    },
    preference:Number,
    BranchName:String
  }],
  
  requestSubmittedOn:Date

}, {
  usePushEach: true
});



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);