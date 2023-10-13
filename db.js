const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/mongo";
// const mongoURI="mongodb://127.0.0.1/mongo";

const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log('Connect to mongo successful.');
    }
    catch(err){
        console.log("Connect to mongo unsuccessful",err);
    }
}

module.exports=connectToMongo;