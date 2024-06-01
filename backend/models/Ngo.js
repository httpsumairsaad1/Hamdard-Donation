const mongoose = require("mongoose");

// Creating Schema for the Ngo
const NgoSchema =new  mongoose.Schema({
  name: { 
      type: String, 
      required: true 
    },
    email: { 
        type: String, 
        required: true, 
unique: true 
},
password: { 
type: String, 
required: true 
},
role: { 
type: String, 
required: true
},
address: {
    type : String,
    required: true,
}
})


module.exports = mongoose.model("Ngo", NgoSchema);
