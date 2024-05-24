import { Link } from 'react-router-dom'
import { Avatar } from './BlogCard'

export const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-2'>
      <div>
        <Link
          to={'/blogs'}
          className='flex flex-col justify-center font-extrabold cursor-pointer my-2'
        >
          Blogger
        </Link>
      </div>

      <div>
        <Link to={'/publish'}>
          <button
            type='button'
            className=' mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800
             focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-1 '
          >
            New
          </button>
        </Link>
        <Avatar name='saurabh' />
      </div>
    </div>
  )
}
