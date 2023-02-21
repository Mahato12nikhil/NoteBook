const mongoose =require('mongoose')

const MONGO_URI='mongodb://localhost:27017'

const connectToMongo=()=>{
    mongoose.connect(MONGO_URI,()=>{
        console.log('MongoDB connected...')
    });
}

module.exports=connectToMongo