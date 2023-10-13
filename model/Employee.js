const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    name:{
        type:String,
        // required: true,
    },
    age:{
        type:Number,
        // required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    role:{
        type:String,
        // required: true,
    }
})

module.exports = mongoose.model("employee",EmployeeSchema)