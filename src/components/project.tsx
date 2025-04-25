import React from 'react'
import { Card } from './ui/card'
import { CardTitle } from './ui/card'
import { CardContent } from './ui/card'
import { CardDescription } from './ui/card'
import { CardHeader } from './ui/card'


const Project = () => {
  return (
    <Card className='hover:scale-105 transition-all duration-300'>
      <CardHeader>
        <CardTitle className='text-lg font-medium text-gray-900 dark:text-gray-100'>
          Project Name
        </CardTitle>
        <CardDescription className='text-sm text-gray-600 dark:text-gray-400'>
          Project Description
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Additional details about the project can go here.
        </p>
      </CardContent>
    </Card>
  )
}

export default Project