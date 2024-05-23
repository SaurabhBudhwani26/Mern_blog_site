export const BlogSkeleton = () => {
    return (
        <div role="status" className=" animate-pulse py-2" >
            <div className='flex justify-center'>
                <div className='grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl'>
                    <div className='col-span-9'>
                        <div className='text-5xl font-extrabold'>
                        <div className="h-10 bg-gray-200 rounded-full  max-w-[700px] mb-2.5"></div>
                        </div>
                        <div className='text-slate-400 pt-2'> 
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[200px] mb-2.5"></div>
                        </div>
                        <div className='pt-4'>
                            {/* {blog.content} */}
                            <div className="h-3 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
                            <div className="h-3 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
                            <div className="h-3 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
                            <div className="h-3 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>
                            <div className="h-3 bg-gray-200 rounded-full  max-w-[800px] mb-2.5"></div>    
                            </div>
                    </div>
                    <div className='col-span-3'>
                        <div>
                            
                        <div className="h-3 bg-gray-200 rounded-full  max-w-[150px] mb-2.5"></div>

                        </div>
                        <div className='flex w-full pt-2'>
                            <div className='flex flex-col justify-center pt-2'>
                            <div className="h-7 w-7 bg-gray-200 rounded-full mb-2.5"></div>
                            
                            </div>
                            <div className='flex flex-col justify-center ml-2 text-lg font-extrabold pt-2'>
                            <div className="h-4 bg-gray-200 rounded-full  max-w-[150px] mb-2.5"></div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}