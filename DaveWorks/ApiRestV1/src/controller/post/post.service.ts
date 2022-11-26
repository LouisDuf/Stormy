import PostModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */
    public async create(title: string, body: string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body });
            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

const addTask = async(req : Request, res : Response) => {
    try {
        const data = req.body;
        await db.collection('task2').add(data);
        // await db.collection('task2').doc().set(data);
        res.send('Success add');
    } catch (error) {
        res.status(400).send('Cannot add student');
    }
}

export default PostService;