const User = require('../../models/User.js');
const bcrypt = require("bcryptjs");
const authConfig = require('../../config/auth');

const jwt = require('jsonwebtoken');


 exports.auth =  (req,res) => { 
    res.send({ok: true, userId: req.userId })
 };

