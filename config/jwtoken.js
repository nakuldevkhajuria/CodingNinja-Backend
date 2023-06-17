// const jwt = require("jsonwebtoken")
import jwt from 'jsonwebtoken'
const JWT_SECRET ='MYSECRET'
const generateToken = (id)=>{

   return jwt.sign({id}, JWT_SECRET , {expiresIn:'1d'})
}

// module.exports = {generateToken}
export {generateToken}