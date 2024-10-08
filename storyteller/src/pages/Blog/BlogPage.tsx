import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogType } from "../../types/blog.types";
import BlogService from "../../services/blog.service";
// components
import Card from "../../components/Card/Card";

const BlogPage: React.FC = () => {
    const [data, setData] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBlog = async (): Promise<void> => {
        try {
            const response = await BlogService.getPosts();
            setData(response);
        }
        catch (error: any) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, [])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="max-w-6xl mx-auto p-6 my-6">
            <div className="grid grid-cols-3 gap-5 items-center">
                {
                    data.map((item, index) => (
                        <Card key={index}>
                            <Link to={`/${item.id}`} className="card rounded-xl cursor-pointer">
                                <div className="max-w-full overflow-hidden rounded-xl relative">
                                    <img className="w-full rounded-t-xl rounded-br-xl hover:scale-110 transition-all duration-500" src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className="absolute bg-gray-100 bottom-0 left-0 flex flex-nowrap items-center gap-5 text-[11px] font-semibold p-3 rounded-tr-xl tracking-wider text-gray-700">
                                        <h1>21 Jan 2024</h1>
                                        <h1>Global</h1>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h1 className="text-[14px] font-medium tracking-wide my-3 text-justify">{item?.title || ""}</h1>
                                </div>
                            </Link>
                        </Card>
                    ))
                }

            </div>
        </div>
    )
}

export default BlogPage;