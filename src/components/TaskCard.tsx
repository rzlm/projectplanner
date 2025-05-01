import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Flag, MessageSquare, MoreHorizontal, Paperclip } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TaskCardProps {
  taskName: string
  description: string
  issueNumber: string
  priority: "low" | "medium" | "high"
  status: "todo" | "in-progress" | "review" | "done"
  dueDate: string
  assignee: {
    name: string
    avatar: string
    initials: string
  }
  comments: number
  attachments: number
}

export default function TaskCard({
  taskName = "Implement dashboard analytics",
  description = "Create charts and data visualization components for the main dashboard view",
  issueNumber = "PRJ-423",
  priority = "high",
  status = "in-progress",
  dueDate = "May 15, 2025",
  assignee = {
    name: "Alex Morgan",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AM",
  },
  comments = 5,
  attachments = 2,
}: TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-amber-500"
      case "low":
        return "text-green-500"
      default:
        return "text-slate-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "todo":
        return (
          <Badge variant="outline" className="text-slate-500">
            To Do
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-200 bg-blue-50">
            In Progress
          </Badge>
        )
      case "review":
        return (
          <Badge variant="outline" className="text-purple-500 border-purple-200 bg-purple-50">
            In Review
          </Badge>
        )
      case "done":
        return (
          <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50">
            Done
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <Card className=" min-w-xs ">
      <CardHeader className="py-0 px-4 m-0">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <Badge variant="outline" className="font-mono text-xs">
              {issueNumber}
            </Badge>
            <h3 className="font-medium text-sm w- ">{taskName}</h3>
          </div>
        
                <DropdownMenu>
            <DropdownMenuTrigger>
              
                <MoreHorizontal className="h-4 w-4 text-slate-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
      </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="m-0 px-4 py-0">
        {/* <p className="text-sm text-slate-600 ">{description}</p> */}
        <div className="flex items-center gap-2 ">
          <Badge className="text-xs  capitalize bg-rose-100 outline-1 text-gray-900">{priority} priority</Badge>
          <Separator orientation="vertical" className="h-3" />
          {getStatusBadge(status)}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={assignee.avatar || "/placeholder.svg"} alt={assignee.name} />
              <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
            </Avatar>
            {/* <span className="text-xs text-slate-600">{assignee.name}</span> */}
          </div>
          
        </div>
      </CardFooter>
    </Card>
  )
}
