const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name:{
        type:String,
        // required: true,
    },
    price:{
        type:Number,
        // required: true,
    },
    qty:{
        type:Number,
        // required: true,
    },
    total:{
        type:Number,
        // required: true,
    },
   
})

module.exports = mongoose.model("product",ProductSchema)