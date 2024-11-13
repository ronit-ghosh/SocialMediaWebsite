const mongoose = require('mongoose');
const { UserModel } = require('../db/db');

mongoose.connect('mongodb+srv://divwardhan2404:k6pnog6g5y@user.bex1f.mongodb.net/socialMediaApp');

async function EmailCheck(req, res, next) {
    const email = req.body.email;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function UserCheck(req, res, next) {
    const username = req.body.username;
    try {
        const user = await UserModel.findOne({ username: username });
        if (user) {
            return res.status(400).json({ message: 'Username already exists' });
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

function validatePassword(req, res, next) {
    const password = req.body.password;
    const isLongEnough = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (isLongEnough && hasUppercase && hasSpecialChar) {
        next();
    } else {
        res.status(400).json({ message: 'Password should be at least 8 characters long and contain at least one uppercase letter and one special character' });
    }
}

module.exports = {
    EmailCheck,
    UserCheck,
    validatePassword,
};
