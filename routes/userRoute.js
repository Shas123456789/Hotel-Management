const express = require('express');
const router = express.Router();

const User = require("../models/userModel"); // Assuming your model is named User

router.post('/register', async (req, res) => {
    const newUser = new User(req.body);

    try {
        await newUser.save();
        res.send("User Registration Successful");
    } catch (error) {
        return res.status(400).json({ error: error.message }); // Sending error message in response
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email or password is missing." });
    }

    try {
        const foundUser = await User.findOne({ email: email, password: password }); // Using a different variable name
        if (foundUser) {

            const temp = {
                name: foundUser.name,
                email:foundUser.email,
                isAdmin:foundUser.isAdmin,
                _id : foundUser._id
            }
                res.send(temp);
            
            
        } else {
            return res.status(400).json({ message: "Email or Password is Incorrect!" });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message }); // Sending error message in response
    }
});

module.exports = router;
