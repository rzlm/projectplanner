import React from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plus } from "lucide-react"
import { useState, useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"
const NewTaskForm = () => {

    //save data
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    const [assignee, setAssignee] = useState('')
    const [priority, setPriority] = useState('low')
      const [dueDate, setDueDate] = React.useState<Date | undefined>(new Date())

    const [tags, setTags] = useState('')

    //save the list, author

    const handleCreateTask = () => {
        // Logic to save the task data
        console.log("Task created")
        //add task to list
        const newTask = {
            taskName,
            description,
            assignee,
            priority,
            dueDate,
            tags
        }
        console.log("New Task:", newTask)


    }

    //log all changes
    useEffect(() => {
        console.log("Task Name:", taskName)
        console.log("Description:", description)
        console.log("Assignee:", assignee)
        console.log("Priority:", priority)
        console.log("Due Date:", dueDate)
        console.log("Tags:", tags)
    }, [taskName, description, assignee, priority, dueDate, tags])


  return (
    <div>
        <div>
        <Dialog>
          <DialogTrigger className="text-sm bg-rose-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200 w-full">
            <Plus className="inline mr-2" /> Add task
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle >New Task</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Label 
              className="text-sm font-semibold">Task Name</Label>
              <Input placeholder="Task Name" className="border border-gray-300 rounded-md p-2" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
              <Label className="text-sm font-semibold">Description</Label>
              <Textarea placeholder="Description" className="border border-gray-300 rounded-md p-2" value={description} onChange={(e) => setDescription(e.target.value)} />
              <Label className="text-sm font-semibold">Assignee(s)</Label>
              <Input placeholder="Assignee" className="border border-gray-300 rounded-md p-2" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <Label className="text-sm font-semibold">Priority</Label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-semibold">Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"}>
                        <span> {dueDate ? dueDate.toLocaleDateString() : "Pick a date"} </span>
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar 
                       mode="single"
                       selected={dueDate}
                       onSelect={setDueDate}
                       className="rounded-md border"
                        
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Label className="text-sm font-semibold">Tags</Label>
              <Input placeholder="Status" className="border border-gray-300 rounded-md p-2"
               value={tags}
               onChange={(e) => setTags(e.target.value)}
              />
              <Button
                onClick={handleCreateTask}
               className="bg-rose-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200">
                Create Task
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default NewTaskForm