import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();
router.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({error: 'User already exists'});
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

export default router;
