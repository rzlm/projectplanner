"use client"
import React from 'react'
import List from './List'
import { Button } from '@/components/ui/button'
import { lists } from '@/testdata/lists'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Check, Plus, X, Pencil } from 'lucide-react'
import { useRef } from 'react'
const Board = () => {

  //add list
  const [boardName, setBoardName] = useState('Sample Board')
  const [boardDescription, setBoardDescription] = useState('This is a sample board')
  const [newListName, setNewListName] = useState('')
  const [listsData, setListsData] = useState(lists)
  const [isEditingBoardName, setIsEditingBoardName] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isEditingBoardName && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditingBoardName])

  const handleRename = () => {
    setIsEditingBoardName(true)
  }

  const handleSave = () => {
    setIsEditingBoardName(false)
  }

  const handleCancel = () => {
    setIsEditingBoardName(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave()
    } else if (e.key === "Escape") {
      setIsEditingBoardName(false)
      setBoardName(boardName)
    }
  }

  const handleCreateList = () => {
    if (newListName.trim() === '') return
    console.log("New List Created:", newListName)
    setNewListName('') 
    const newList = {
      id: `${listsData.length + 1}`,
      name: newListName,
      description: '',
      tasks: []
    }
    setListsData((prevLists) => [...prevLists, newList])
  }

  //handle delete list
  const handleDeleteList = (id: string) => {
    setListsData((prevLists) => prevLists.filter(list => list.id !== id))
  }




  return (
    <div className='p-12 bg-gray-50 '>
      <div>
        {isEditingBoardName ? (
            <div className="flex items-center gap-1 w-full">
              <Input
                ref={inputRef}
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
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
            <div className="flex items-center gap-2 w-full">
              <h1 className="text-xl font-semibold cursor-pointer hover:text-slate-600" onClick={handleRename}>
                {boardName}
              </h1>
              <Pencil
               className="inline mr-2 cursor-pointer text-gray-500 hover:text-gray-700" 
               onClick={handleRename}
               size={16}
               />

            </div>
          )}
        <p className='text-gray-500'>This is the board page</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:overflow-x-scroll">
        {listsData.map((list) => (
          <div key={list.id} className="w-full">
            <List id={list.id} 
            initialName={list.name}
            handleDeleteList={handleDeleteList}
            taskData={list.tasks}
            />
          </div>
        ))}
      </div>
           
            
              <div>
        <Dialog>
          <DialogTrigger className="text-sm bg-rose-500 text-white px-20 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200 w-fit">
            <Plus className="inline mr-2" /> Add list
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle > Add another list</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Label 
              className="text-sm font-semibold">List Name</Label>
              <Input placeholder="List Name" className="border border-gray-300 rounded-md p-2" value={newListName} onChange={(e) => setNewListName(e.target.value)} />

              <Button
                onClick={handleCreateList}
               className="bg-rose-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-700 transition duration-200">
                Create list
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
        </div>


  )
}

export default Board