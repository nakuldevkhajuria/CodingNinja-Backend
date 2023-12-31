import express from "express";
import dbConnect from './config/dbConnect.js';
// import dotenv from 'dot-env';

import cors from 'cors';
// const express =require('express')
// const cors = require('cors')
// const dbConnect = require('./config/dbConnect');
import mainRoute from './routes/MainRoute.js';
const port = 9000;
const app = express();
app.use(cors());
app.use(express.json())


app.get("/",(req,res)=>{
    res.json({message:"hello from express"})
})
app.get('/api',(req,res)=>{
    res.json({message:"hello from api"})
})
app.use('/api/user',mainRoute)


app.listen(port,async()=>{
    await dbConnect();
    console.log(`Starting server on ${port} port`)
})