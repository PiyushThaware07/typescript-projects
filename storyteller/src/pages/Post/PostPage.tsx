import React, { useEffect, useState } from "react";
import { BlogType } from "../../types/blog.types"; // Ensure BlogType is correctly defined
import { useParams } from "react-router-dom";
import BlogService from './../../services/blog.service';

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<BlogType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPost = async (): Promise<void> => {
        try {
            const response = await BlogService.getPostById(id);
            setData(response);
        } catch (error: any) {
            setError("Failed to load the post. Please try again later."); 
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    // Debugging log
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="post p-4">
            {data ? (
                <>
                    <h1 className="text-xl font-semibold">{data.title}</h1>
                    <p className="text-sm font-medium">{data.body}</p>
                </>
            ) : (
                <div>No post found.</div>
            )}
        </div>
    );
};

export default PostPage;
