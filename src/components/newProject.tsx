"use client"
import React from 'react'
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { createProject } from '@/lib/fetching'
import {toast} from 'sonner'


const NewProject = () => {



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const project = await createProject({ name, description })
    if(project) {
      console.log("Project created successfully:", project)
      toast("Project has been created.")
    } else {
      console.error("Failed to create project")
    }
  }

  return (
        <div className=''>
     
           <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new project</DialogTitle>
          <DialogDescription>
            Create a new project here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Project Name
              </Label>
              <Input id="name" name='name'  className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description (optional)
              </Label>
              <Input
                id="description" name='description' className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-rose-600 hover:bg-rose-700" >Create </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
   

   
    </div>
  )
}

export default NewProject