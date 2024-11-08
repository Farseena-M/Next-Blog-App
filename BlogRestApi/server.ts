import app from "./app";
import  dotenv from 'dotenv';
import dbConnect from "./src/dbConnect/db";
dotenv.config();

dbConnect()

app.listen(process.env.PORT,()=>{
console.log(`Server running on port ${process.env.PORT}`);
})