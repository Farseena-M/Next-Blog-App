import { Request, Response } from 'express';
import BlogPost from '../models/blog'


export const createPost = async (req: Request, res: Response) => {
    try {
        const post = await BlogPost.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};



export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};


export const updatePost = async (req: Request, res: Response) => {
    try {
        const updatePost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Post updated', updatePost });
    } catch (error) {
        res.status(500).json({ error: 'Failed to updated post' });
    }
};


export const deletePost = async (req: Request, res: Response) => {
    try {
        await BlogPost.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};