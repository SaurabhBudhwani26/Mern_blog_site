import { useParams } from "react-router-dom"
import { ExpandBlog } from "../components/ExpandBlog"
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blog = ()=>{

    const {id} = useParams()

    const { loading, blog } = useBlog({
        id: id || ""
    })

    if(loading){
        return(
            <div>
                <Appbar/>
                <BlogSkeleton/>

            </div>
        )
    }

    return (
        <>
        <div>
            <ExpandBlog blog={blog}/>
        </div>
        </>
    )
}