import { useParams } from "react-router-dom"
import { ExpandBlog } from "../components/ExpandBlog"
import { useBlog } from "../hooks"

export const Blog = ()=>{

    const {id} = useParams()

    const { loading, blog } = useBlog({
        id: id || ""
    })

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <>
        <div>
            <ExpandBlog blog={blog}/>
        </div>
        </>
    )
}