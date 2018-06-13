var mongoose = require('mongoose');


var BranchSchema = new mongoose.Schema({

  Location:String,
  BranchName: String,
  TotalSeats: Number,
  Vacancies: Number,
  Members: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String,
    fullName: String,
    branch: String,
    email: String,
    profileImage: String
  }],
  
  Requests:[{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request"
    },
    BranchName:String,
    preference:Number
    
  }]
  

}, {
  usePushEach: true
});



module.exports = mongoose.model("Branch", BranchSchema);