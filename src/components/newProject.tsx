import React from 'react'
import {Plus} from 'lucide-react'
import { BoardDialog } from './createBoard'

const NewProject = () => {

  
  return (
        <div className='hover:scale-105 transition-all duration-300'>
        <button  className=" items-center rounded-md border border-gray-300 dark:border-gray-100 p-4 shadow-sm sm:p-6 flex flex-col justify-center h-full"
        >
          <BoardDialog/>
    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">


    <div className="mt-4 sm:mt-0 items-center flex flex-col justify-center h-full gap-8">
        <h3 className="text-lg font-medium text-gray-900  dark:text-gray-100">
        New project
        </h3>
        <Plus className="text-gray-700 dark:text-gray-300" />

        
    </div>
    </div>


    </button>
   
    </div>
  )
}

export default NewProject