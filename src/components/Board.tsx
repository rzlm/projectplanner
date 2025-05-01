import React from 'react'
import List from './List'
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
            
        </div>

    </div>
  )
}

export default Board