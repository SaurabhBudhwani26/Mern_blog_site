import { Blog } from '../hooks'
import { Appbar } from './Appbar'
import { Avatar } from './BlogCard'

export const ExpandBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className='flex justify-center'>
        <div className='grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl'>
          <div className='col-span-9'>
            <div className='text-5xl font-extrabold'>{blog.title}</div>
            <div className='text-slate-400 pt-2'> Posted on 18th May</div>
            <div className='pt-4'>{blog.content}</div>
          </div>
          <div className='col-span-3'>
            <div>Author</div>
            <div className='flex w-full pt-2'>
              <div className='flex flex-col justify-center pt-2'>
                <Avatar name={blog.author.name || 'Anonymous'} />
              </div>
              <div className='flex flex-col justify-center ml-2 text-lg font-extrabold pt-2'>
                {blog.author.name || 'Anonymous'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
