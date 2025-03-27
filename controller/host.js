const Package = require("../models/booking-package");
const Feedback = require("../models/feedback");
const path = require('path');

exports.postFeedback = (req,res,next) =>{
  console.log(req.body);
  const {name,email,phone,subject,message} = req.body;
  
  const feedback = new Feedback(name,email,phone,subject,message);
  feedback.save();
  res.sendFile(path.join(__dirname , '../' , 'view','contact.html'));
}

exports.postBookedPackage=(req,res,next) =>{
  
  const {service,duration,amount} = req.body;
  const package = new Package(service,duration,amount);
  package.save();
  res.sendFile(path.join(__dirname , '../' , 'view','payment.html'));
}
