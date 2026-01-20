const mongoose = require('mongoose');

const aiInshightSchema  = mongoose.Schema({
 shopId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Shop', 
    required: true 
},
  date: { 
    type: Date, 
    default: Date.now 
},
  insightText: { 
    type: String 
},
})


module.exports = mongoose.model('AIInshights' , aiInshightSchema);