import api from "./api";
import { BlogType } from "../types/blog.types";

class BlogService {
    public static async getPosts(): Promise<BlogType[]> {
        try {
            const response = await api.get("/posts");
            return response;
        }
        catch (error) {
            throw error;
        }
    }

    public static async getPostById(id?: string): Promise<BlogType> {
        try {
            const response = await api.get(`/posts/${id}`);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}

export default BlogService;