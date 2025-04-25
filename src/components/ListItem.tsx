import React from 'react'
import Tag from './Tag'
import { EllipsisVertical } from 'lucide-react'
const ListItem = () => {
  return (
    <div className='flex flex-col  justify-between border border-gray-300 p-2 my-2 rounded-md w-full bg-amber-100'>
      <div >
        
        <div className='flex justify-between'>
          <p className='text-gray-500 text-sm '>#53</p>
          <EllipsisVertical className='text-gray-500' size={20} />
        </div>
        <h3 className='text-md font-semibold text-gray-800'>Task Title</h3>
        <p className='text-gray-600'>This is the task description</p>

      </div>
      <div className='flex   gap-2'>
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  )
}

export default ListItem