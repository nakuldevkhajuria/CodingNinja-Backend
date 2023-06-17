// const mongoose = require('mongoose')
import mongoose from 'mongoose';
// const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'

var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre("save",async function(next){
    const salt = 10;
    this.password= await bcrypt.hash(this.password,salt);
    next();
})
userSchema.methods.isPasswordMatched = async function (enteredPassword){
    return bcrypt.compare(enteredPassword,this.password)
}

//export the model
// module.exports = mongoose.model('User',userSchema);
export default mongoose.model('User',userSchema)