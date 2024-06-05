const mongoose = require('mongoose');
const BankAccountSchema= mongoose.Schema({
    bank:{
        type: String,
        require: true
    },
    cardType : {
        type : String,
        require: true
    },
    accountNumber: {
        type: String,
        require : true
    },
    amount: {
        type: number,
        require: true
    }
});

module.exports = mongoose.model("BankAccount",BankAccountSchema);