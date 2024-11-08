import mongoose from "mongoose";
import { IBlogPost } from "../interfaces/IBlogPost";

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});


export default mongoose.model<IBlogPost>('BlogPost', blogPostSchema);