import React from 'react'
import { Button } from '@/components/ui/button'
import IconCard from '@/components/cardComponent'
import { Bell } from 'lucide-react'
import { CircleCheckBig } from 'lucide-react'
import { SquareKanban } from 'lucide-react'
const features = [
  {
    name: 'Simple Task tracking',
    description: 'Create tasks, set due dates, assign responsibilities, and never miss a deadline again',
    icon: <CircleCheckBig className="text-rose-700 dark:text-rose-300" />
  
  },
  {
    name: 'Visual project Management',
    description: 'Organize tasks with an intuitive Kanban board. Drag, drop, and prioritize with ease — your workflow, your way.',
    icon: <SquareKanban className="text-rose-700 dark:text-rose-300" />
  },
  {
    name: 'Smart Notifications',
    description: 'Stay in the loop with instant updates on changes, mentions, and deadlines — without the noise.',
    icon: <Bell className="text-rose-700 dark:text-rose-300" />
  }
]
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Project Plan
    </h1>

    <p className='text-gray-600'>Team Collaboration and productivity like you've never seen before</p>
    
    <div>
     <div className='flex flex-row gap-4 py-10'>
      <Button className="bg-rose-500 text-white px-4 py-2 rounded-sm hover:bg-rose-600 transition duration-200">
        Get Started
      </Button>
      <Button className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600 transition duration-200">
        Learn More
      </Button>
     </div>
    </div>
    <div className="max-w-4xl w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <IconCard key={feature.name} name={feature.name} description={feature.description} icon={feature.icon} />
        ))}
      </div>  
      </div>

    
    </div>
  )
}

export default page