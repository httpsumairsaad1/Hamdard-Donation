const mongoose = require('mongoose');

const TransactionSchema= new mongoose.Schema({
    SenderName:{
        type: String,
        require: true
    },
    RecieverName:{
        type: String,
        require: true
    },
    sendingAmount:{
        type: Number,
        require: true
    },
    date:{
        type: Date,
        require: true,
        default: new Date,
    },
    time:{
        type: time,
        require: true,
        default: new Date.now()
    },
    attempt:{
        type: Boolean,
        require: true,
        default: false
    }
})