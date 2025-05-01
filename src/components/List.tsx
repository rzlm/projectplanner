import React from 'react'
import TaskCard from './TaskCard'
import { Card, CardHeader } from './ui/card'
import {MoreHorizontal, Plus} from 'lucide-react'
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
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>
    </Card>
  )
}

export default List