const mongoose = require("mongoose") 
const electronicSchema = mongoose.Schema({ 
    electronics_product : String,
    electronics_price : Number,
    electronics_size : String 
}) 
 
module.exports = mongoose.model("electronics",electronicSchema)