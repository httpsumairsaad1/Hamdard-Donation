const mongoose = require('mongoose');

const OtpSchema= mongoose.Schema({
    userID:{
        type: Object,
        require: true
    },
    userRole:{
        type: String,
        require: true,
    },
    otp:{
        type : String,
        require: true,
    },
    createdAt: {
        type : Date,
        require: true,
        default: new Date,
    },
    expireAt: {
        type: Date,
        required: true,
        default: function() {
          // Set expiration time to 30 seconds from the current time
          return new Date(Date.now() + 30 * 1000); // 30 seconds in milliseconds
        },
        index: { expires: '30s' } // Set TTL index to automatically delete documents after 30 seconds
      }
})

const OTP = mongoose.model('OTP', OtpSchema);

module.exports = OTP;