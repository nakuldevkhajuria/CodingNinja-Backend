// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const MONGODB_CONNECT ='mongodb://0.0.0.0:27017/ninja'
const dbConnect = async()=>{
try {
await mongoose.connect(MONGODB_CONNECT)
console.log('database is connected successfully')
} 
catch (error) {
    console.log('data base error is' + error)
}
}

export default dbConnect;
// module.exports = dbConnect;