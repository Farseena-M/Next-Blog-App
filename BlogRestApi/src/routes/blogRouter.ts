import { Router } from 'express';
import { createPost, deletePost, getAllPosts, updatePost } from '../controllers/blogCOntroller';

const blogRouter: Router = Router();

blogRouter.post('/create', createPost);
blogRouter.get('/all-posts', getAllPosts);
blogRouter.patch('/:id', updatePost);
blogRouter.delete('/:id', deletePost);

export default blogRouter;
