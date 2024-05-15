import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 font-mono">
                <div>
                    <Auth type="signin" />
                </div>
                <div className="hidden lg:block">
                    <Quote />
                </div>

            </div>
        </>
    )
}