import axios from 'axios'
import { Appbar } from '../components/Appbar'
import { BACKEND_URL } from '../config'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const Publish = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function publishPost () {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        },{
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });

        navigate(`/blog/${response.data.id}`)

      }
  return (
    <div>
      <Appbar />
      <div className='flex justify-center pt-20'>
        <div className='max-w-screen-lg w-full'>
          <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            placeholder='Title'
          />
        </div>
      </div>

      <div className='flex justify-center pt-5'>
        <div className='max-w-screen-lg w-full'>
          <TextEditor onChange={(e) => {
                setContent(e.target.value)
              }} />
          <button
          onClick={publishPost}
            type='submit'
            className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-800'
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  )
}

function TextEditor ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  

  return (
    <div>
      <div className='w-full mb-4'>
        <div className='flex items-center justify-between border-b'>
          <div className='bg-white rounded-b-lg w-full border-2'>
            <label className='sr-only'>Publish post</label>
            <textarea
            onChange={onChange}
              rows={9}
              className='focus:outline-none block w-full px-2 py-2 text-sm text-gray-800 bg-white border-0 pl-2'
              placeholder='Write an article...'
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
