import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {

    return (
        <div className="border-b flex justify-between px-10 py-3">
            
            <div>
            <Link to={'/'} className="flex flex-col justify-center font-extrabold cursor-pointer">
                Blogger
            </Link>
            </div>
            
            <div>
                <Avatar name= "saurabh"/>
            </div>
        </div>
    )
}