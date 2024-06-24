const express = require('express');
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser.js');

const JWT_SECRET = 'oGzjEdp{F9Z]~h3pmP~yP@2sdvY!bj1kP]1&Qybqaf}SAz2Ym8';

//create user endpoint /api/auth/createuser 
router.post('/createuser',[
    body('name','Enter a Valid Name').isLength({ min: 3 }),
    body('email','Enter a Valid Email').isEmail(),
    body('password','Password is not valid').isLength({ min: 5 }),
] ,async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry a user this email already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        const authToken = jwt.sign({ user: user._id }, JWT_SECRET);
        res.send({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error Occured');
    }
});

//login user endpoint /api/auth/login
router.post('/login',[
    body('email','Enter a Valid Email').isEmail(),
    body('password','Password is not valid').isLength({ min: 5 })
] ,async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const authToken = jwt.sign({ user: user._id }, JWT_SECRET);
        res.send({authToken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }

});



//get user details endpoint /api/auth/getuser
router.post('/getuser',fetchUser,async (req, res) => {
    try {
        const user_id = req.user;
        const user = await User.findById(user_id).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;