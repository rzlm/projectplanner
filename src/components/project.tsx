import React from 'react'
import { Card } from './ui/card'
import { CardTitle } from './ui/card'
import { CardContent } from './ui/card'
import { CardDescription } from './ui/card'
import { CardHeader } from './ui/card'
import Link from 'next/link'
interface ProjectProps {
  id: string;
  name: string;
  description?: string;
  members?: string[];
  tasks?: string[];

}

const Project = ({ id, name, description, members, tasks }: ProjectProps) => {
  return (
    <Link href={`/projects/${id}`} className='no-underline text-inherit'>
    <Card className='hover:scale-105 transition-all duration-300 max-w-sm'>
      <CardHeader>
        <CardTitle className='text-lg font-medium text-gray-900 dark:text-gray-100'>
        {name}
        </CardTitle>
        <CardDescription className='text-sm text-gray-600 dark:text-gray-400'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Additional details about the project can go here.
        </p>
      </CardContent>
    </Card>
    </Link>
  )
}

export default Project