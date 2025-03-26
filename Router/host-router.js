const express = require('express');
const hostrouter =  express.Router();
const hostcontroller = require('../controller/host');
// const Feedback = require("../models/feedback");
const path = require('path');
hostrouter.post("/submit-contact",hostcontroller.postFeedback);

hostrouter.post("/booking-package",hostcontroller.postBookedPackage);

  module.exports = hostrouter;

