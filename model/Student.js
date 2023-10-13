const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
    name:{
        type:String,
        // required: true,
    },
    phone:{
        type:Number,
        // required: true,
    },
    email:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        // required: true,
    },
    date:{
        type:String,
        // required: true,
        // default:Date.now,
    },
})

module.exports = mongoose.model("Student",StudentSchema)