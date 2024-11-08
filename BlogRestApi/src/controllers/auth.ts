import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import User from "../models/user";


export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered', user });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};




export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).json({ message: 'Logged in' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};