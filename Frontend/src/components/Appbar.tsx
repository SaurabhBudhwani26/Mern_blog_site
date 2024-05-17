import { Avatar } from "./BlogCard"

export const Appbar = () => {

    return (
        <div className="border-b flex justify-between px-10 py-3">
            <div className="flex flex-col justify-center">
                Blogger
            </div>
            <div>
                <Avatar name= "saurabh"/>
            </div>
        </div>
    )
}