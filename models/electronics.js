const mongoose = require("mongoose") 
const electronicsSchema = mongoose.Schema({ 
    electronics_product : String,
    electronics_price : Number,
    electronics_size : String 
}) 
 
module.exports = mongoose.model("electronics",electronicsSchema)