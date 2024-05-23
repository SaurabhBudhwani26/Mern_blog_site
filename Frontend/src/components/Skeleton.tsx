
import { Circle } from "./BlogCard"

export const Skeleton = () => {

    return (
        <div role="status" className=" animate-pulse py-2">
            
            <div className="border-b-2 border-slate-300 pb-4n p-4 w-screen max-w-screen-lg cursor-pointer">
                <div className='flex'>
                    
                    
                    <div className="h-2 w-2 flex justify-center flex-col pl-2"><Circle /></div>
                    <div className='flex justify-center flex-col font-thin  text-slate-400 pl-2'>
                        
                    </div>
                    
                    <div className=" pt-4 w-full text-slate-500 text-sm font-thin">
                        <div className="h-4 bg-gray-200 rounded-full  max-w-[150px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}