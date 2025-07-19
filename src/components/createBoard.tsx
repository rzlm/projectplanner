"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { createBoard } from "@/lib/fetching"

interface BoardDialogProps {
  projectId: string
}
export function BoardDialog({ projectId }: BoardDialogProps) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name") as string
      const description = formData.get("description") as string
      const board = await createBoard(name, projectId, description)
      if(board) {
        console.log("Board created successfully:", board)
      } else {
        console.error("Failed to create board")
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">New Board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Create a new board</DialogTitle>
          <DialogDescription>
            Create a new board here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
            <Label htmlFor="name" className="text-right">
              Board Name
            </Label>
            <Input
              id="board-name"
              name="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description (optional)
            </Label>
            <Input
              id="description"
              name="description"
              className="col-span-3"
            />
            
          </div>
        </div>
        
    
        <DialogFooter>
          <Button type="submit" className="bg-rose-600 hover:bg-rose-700" >Create </Button>
        </DialogFooter>
          </form>
      </DialogContent>
    </Dialog>
  )
}
