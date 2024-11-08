import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = async () => {
    try {
        const dbUrl = process.env.LOCAL_URL;
        if (!dbUrl) {
            throw new Error("LOCAL_URL is not defined in environment variables");
        }
        await mongoose.connect(dbUrl);
        console.log(`DB Connected`);
    } catch (error) {
        console.log(`Error connecting to MongoDB`, error);
    }
};

export default dbConnect;
