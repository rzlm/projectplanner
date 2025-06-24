"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import NewTaskForm from "./NewTaskForm"
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
  taskData?: any 
  handleDeleteList: (id: string) => void
}

const List = ({ id = "list-1", initialName = "List Name", handleDeleteList, taskData }: ListProps) => {
  const [listName, setListName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [taskDataList, setTaskDataList] = useState(taskData || [])

  const handleNewTask = (newTask: any) => {
    setTaskDataList((prevTasks:any) => [...prevTasks, newTask])
  }
  const handleDeleteTask = (taskId: string) => {
    setTaskDataList((prevTasks:any) => prevTasks.filter((task:any) => task.id !== taskId))
  }

  




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
            <DropdownMenuItem onClick={() => handleDeleteList(id)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <div className="flex flex-col mt-4">
        <div className="flex flex-col gap-4">
          {taskDataList.map((task:any, index:number) => (
            <TaskCard
              key={index}
              taskName={task.name}
              description={task.description}
              issueNumber={task.issueNumber}
              priority={task.priority}
              status={task.status}
              dueDate={task.dueDate}
              assignee={task.assignees}
              comments={task.comments || 0}
              attachments={task.attachments || 0}
            />
          ))}
        </div>

      </div>

      <div>
        <NewTaskForm />
      </div>

    </Card>
  )
}

export default List

             
      