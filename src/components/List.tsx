import React from 'react'
import ListItem from './ListItem'
import {Plus} from 'lucide-react'
const List = () => {
  return (
    <div className='border border-gray-300 rounded-md p-4 bg-white shadow-md m-1 w-full md:250px'>
      <div className=''>
        <h2 className='text-xl font-bold text-gray-800'>List Title</h2>
        <p className='text-gray-500'>This is the list description</p>
      </div>
      <div className=' flex flex-col mt-4'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        </div>
      <div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition duration-200 w-full'>
          <Plus className='inline mr-2' />
          Add Task

        </button>
      </div>
    </div>
  )
}

export default List