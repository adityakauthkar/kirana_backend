const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true,
        trim: true,
    },
  
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum: ['OWNER', 'STAFF'], default: 'STAFF',
    },
    shopId : {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Shop',   
        }
})