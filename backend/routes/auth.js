const { Router } = require("express");
const { registerSchema, loginSchema } = require("../validation/zod");
const { User } = require("../models/db");
const jwt = require("jsonwebtoken");
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET
const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax', // Lax may or may not be better but it is the most used
    maxAge: 30 * (24 * 60 * 60 * 1000) // Expires after 30 days
};

router.get('/', (req, res) => {
    res.json({ msg: "Hello from auth route" });
});

router.post('/signup', async function (req, res) {
    const { email, username, fullname, password } = req.body;

    // parsing values through zod if any error occurs zod will send the error along with response
    const parsedValues = registerSchema.safeParse({ email, username, fullname, password });
    if (!parsedValues.success) {
        return res.status(411).json(parsedValues.error.issues[0].message); // destructured the parsedValue object for error message (this exact error msg will be shown to FE)
    }

    try {
        // retruning if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(411).json({ msg: "User already exists! Login!" });
        }
        // TODO: hash user's password and save to db
        const newUser = await User.create({ email, username, fullname, password });

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET);
        res.cookie('token', token, cookieOptions);

        return res.json({ msg: "User Created", newUser });
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong!", error });
    }
});

router.post('/signin', async function (req, res) {
    const { email, password } = req.body;

    const parsedValue = loginSchema.safeParse({ email, password });
    if (!parsedValue.success) {
        return res.status(411).json({ msg: "Inputs are incorrect!" });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(411).json({ msg: "User does not exist! Signup!" });
        }

        // TODO: convert user's password to hash -> compare it with db's hash -> if matched let them in else not
        if (password !== existingUser.password) {
            return res.status(411).json({ msg: "Password not matched!" });
        }

        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        res.cookie('token', token, cookieOptions);

        return res.json({ msg: "Login successful", existingUser });
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong!", error });
    }
});

module.exports = router;