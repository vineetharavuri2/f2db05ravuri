const mongoose = require("mongoose") 
const electronicSchema = mongoose.Schema({ 
    electronics_product : {
                       type:String,
                       required:true
    },
    electronics_price : {
                      type: Number,
                      required:true,
                      min:1,
                      max:80
    },
    electronics_size : {
                     type: String,
                     required:true 
    }
}) 
 
module.exports = mongoose.model("electronics",electronicSchema)