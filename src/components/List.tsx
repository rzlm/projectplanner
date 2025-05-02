import React from 'react'
import TaskCard from './TaskCard'
import { Card, CardHeader } from './ui/card'
import {CalendarIcon, MoreHorizontal, Plus} from 'lucide-react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from './ui/input'
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from './ui/textarea'
const List = () => {
  return (
    <Card className='border border-gray-300 rounded-md p-4   m-1 w-full md:250px'>
      <CardHeader className='flex justify-between items-center'>
        <div className='flex items-center'>
          <h2 className='text-md font-semibold'>List Name</h2>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" className="p-0 w-8 h-8 rounded-md">
                <MoreHorizontal className="h-4 w-4 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
      </DropdownMenu>
      </CardHeader>
        

      <div className=' flex flex-col mt-4'>
      <div className="flex flex-col gap-4">
        <TaskCard
          taskName="Implement dashboard analytics"
          description="Create charts and data visualization components for the main dashboard view"
          issueNumber="PRJ-423"
          priority="high"
          status="in-progress"
          dueDate="May 15, 2025"
          assignee={{
            name: "Alex Morgan",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "AM",
          }}
          comments={5}
          attachments={2}
        />

        <TaskCard
          taskName="Fix navigation responsiveness"
          description="The navigation menu doesn't collapse properly on mobile devices"
          issueNumber="PRJ-418"
          priority="medium"
          status="todo"
          dueDate="May 10, 2025"
          assignee={{
            name: "Jamie Chen",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "JC",
          }}
          comments={2}
          attachments={0}
        />

        <TaskCard
          taskName="Update user documentation"
          description="Add new sections for recently added features and update screenshots"
          issueNumber="PRJ-401"
          priority="low"
          status="done"
          dueDate="April 28, 2025"
          assignee={{
            name: "Taylor Kim",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "TK",
          }}
          comments={8}
          attachments={4}
        />
      </div>
        </div>
      <div>
        <Dialog>
  <DialogTrigger className='text-sm bg-rose-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200 w-full'>  <Plus className='inline mr-2' /> Add task</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>New Task</DialogTitle>
 

    </DialogHeader>
    <div className='flex flex-col gap-4'>
      <Label className='text-sm font-semibold'>Task Name</Label>
      <Input placeholder='Task Name' className='border border-gray-300 rounded-md p-2' />
      <Label className='text-sm font-semibold'>Description</Label>
      <Textarea placeholder='Description' className='border border-gray-300 rounded-md p-2' />
      <Label className='text-sm font-semibold'>Assignee(s)</Label>
      <Input placeholder='Assignee' className='border border-gray-300 rounded-md p-2' />
     
     <div className='flex flex-row gap-4'>
          <div className='flex flex-col'>
          <Label className='text-sm font-semibold'>Priority</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Low</SelectItem>
          <SelectItem value="dark">Medium</SelectItem>
          <SelectItem value="system">High</SelectItem>
        </SelectContent>
      </Select>
          </div>

        <div>
          <Label className='text-sm font-semibold'>Due Date</Label>
        <Popover>
                <PopoverTrigger asChild>
                  
                    <Button
                      variant={"outline"}
 >
                       
                        <span>Pick a date</span>
                      
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    
                  />
                </PopoverContent>
              </Popover>
        </div>
     </div>

      <Label className='text-sm font-semibold'>Tags</Label>
      <Input placeholder='Status' className='border border-gray-300 rounded-md p-2' />
      <Button className='bg-rose-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200'>Create Task</Button>

    </div>

  
  </DialogContent>
  
</Dialog>

      </div>
    </Card>
  )
}

export default List