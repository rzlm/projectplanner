import React from 'react'
import List from './List'
import { Button } from '@/components/ui/button'
const Board = () => {
  return (
    <div className='p-12 bg-gray-50 '>
      <div>
        <h1 className='text-2xl font-bold'>Sample Project Board</h1>
        <p className='text-gray-500'>This is the board page</p>
      </div>
      
        <div className="flex flex-col md:flex-row gap-4">

            <div className="w">
            <List />
            </div>
            <div className="">
            <List />
            </div>
            <div className="">
            <List />
            </div>
            <Button className="  bg-rose-200 text-gray-600 px-24 py-2 rounded-lg mt-2 hover:bg-rose-300 transition duration-200">
              Add another list
            </Button>
            
        </div>

    </div>
  )
}

export default Board