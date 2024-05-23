import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {

        return (
        <div>
            <Appbar />
                
        
        <div className="flex justify-center">
            
            <div className="grid grid-cols-1">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </div>
        </div>
        </div>
        )
    }

    return (
        <div>

            <Appbar />

            <div className="flex justify-center">

                <div className="grid grid-cols-1">
                    {
                        blogs.map((blog) => {
                            return <BlogCard
                                id={blog.id}
                                authorName={blog.author.name || "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={blog.publishedDate}
                            />
                        })
                    }
                    <BlogCard
                        id={1}
                        authorName={'Saurabh'}
                        title="MERN"
                        content=" firs"
                        publishedDate="16th May 2024"
                    />



                </div>


            </div>
        </div>


    )
}

