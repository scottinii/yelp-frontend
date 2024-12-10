const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Sign Up Route
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ user: { email: user.email } });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Error signing up" });
        }
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "No account found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        res.status(200).json({ user: { email: user.email } });
    } catch (err) {
        res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;