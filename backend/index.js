const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const { UserModel, UserInfoModel } = require('./db/db');
const { EmailCheck, UserCheck, validatePassword } = require('./middlewares/m1');

const JWT_SECRET = 'secret1234591234567890098765432';
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());



app.post('/signup', EmailCheck, UserCheck, validatePassword, async function(req, res) {
    const { email, username, password } = req.body;
    await UserModel.create({ email, username, password });
    await UserInfoModel.create({ email, username, followers: [], following: [] });
    res.json({ msg: "Hey New User" });
});

app.post('/signin', async function (req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });

    if (user) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.cookie('token', token, { httpOnly: true, secure: true });
        
        return res.json({ msg: "Login successful" });
    } else {
        return res.status(403).json({ message: "User not found" });
    }
});

app.listen(3000);
