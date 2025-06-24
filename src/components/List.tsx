"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import NewTaskForm from "../../NewTaskForm"
import TaskCard from "./TaskCard"
import { Card, CardHeader } from "@/components/ui/card"
import { CalendarIcon, GripVertical, MoreHorizontal, Plus, Check, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
//import { useDrag } from "react-dnd"
import { Label } from "@/components/ui/label"

interface ListProps {
  id: string
  initialName?: string
  // onDragEnd?: (id: string, type: string) => void
}

const List = ({ id = "list-1", initialName = "List Name" }: ListProps) => {
  const [listName, setListName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Set up drag and drop
  // const [{ isDragging }, dragRef] = useDrag({
  //   type: "LIST",
  //   item: { id, type: "LIST" },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  //   end: (item, monitor) => {
  //     if (monitor.didDrop() && onDragEnd) {
  //       onDragEnd(id, "LIST")
  //     }
  //   },
  // })

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleRename = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave()
    } else if (e.key === "Escape") {
      setIsEditing(false)
      setListName(listName)
    }
  }

  return (
    <Card
    
      className={`border border-gray-300 rounded-md p-4 m-1 w-full md:250px }`}
      
    >
      <CardHeader className="flex justify-between items-center p-3">
        <div className="flex items-center gap-2 w-full">
          <GripVertical className="h-5 w-5 text-slate-400 cursor-grab active:cursor-grabbing" />

          {isEditing ? (
            <div className="flex items-center gap-1 w-full">
              <Input
                ref={inputRef}
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-7 py-1 font-semibold"
                autoFocus
              />
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleSave}>
                <Check className="h-4 w-4 text-green-500" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCancel}>
                <X className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ) : (
            <h2 className="text-md font-semibold cursor-pointer hover:text-slate-600" onClick={handleRename}>
              {listName}
            </h2>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="p-0 w-8 h-8 rounded-md">
              <MoreHorizontal className="h-4 w-4 text-slate-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleRename}>Rename</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <div className="flex flex-col mt-4">
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
        <NewTaskForm />
      </div>



      
    </Card>
  )
}

export default List
