import React from 'react'

const Project = () => {
  return (
    <div className='hover:scale-105 transition-all duration-300'>
          <a href="#" className="block rounded-md border border-gray-300 dark:border-gray-100 p-4 shadow-sm sm:p-6">
      <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
      

        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg font-medium text-pretty text-gray-900  dark:text-gray-100">
            Project Title here
          </h3>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">By John Doe</p>

          <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
            maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
      </div>

      <dl className="mt-6 flex gap-4 lg:gap-6">
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 ">Created on</p>

          <p className="text-xs text-gray-700 dark:text-gray-300">31/06/2025</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">5 Collaborators</p>

          <p className="text-xs text-gray-700 dark:text-gray-300"></p>
        </div>
      </dl>
    </a>
    </div>
  )
}

export default Project