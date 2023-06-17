// const express = require('express');
import express from 'express'
// const { createUser, loginUser } = require('../controllers/CreateUser');
import {createUser,loginUser} from '../controllers/CreateUser.js'

const router = express.Router();


router.post("/register", createUser
    );
router.post("/login", loginUser);

// module.exports = router;
export default router