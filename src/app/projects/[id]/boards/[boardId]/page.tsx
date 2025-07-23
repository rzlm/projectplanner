import React from 'react'
import { getBoardById } from '@/lib/fetching';
import { getListsByBoardId } from '@/lib/fetching';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import List from '@/components/List';
import { List as ListIcon } from 'lucide-react';
import { Kanban, Sheet } from 'lucide-react';
export default async function Page({ params }: { params: { boardId: string } }) {

  const { boardId } = params;

  const board = await getBoardById(boardId);
  console.log("Board ID:", boardId);
  console.log("Board data:", board);
  if (!board) {
    return (
      <div>
        <h1 className='text-2xl font-bold p-4'>Board Not Found</h1>
        <p className='p-4'>The board you are looking for does not exist.</p>
      </div>
    );
  }
//get lists for the board
const lists = await getListsByBoardId(boardId);
console.log("Lists for board:", lists);
  return (
    <div>
     <div className='flex flex-row justify-between px-20'>
        <div>
             <h1 className='text-2xl font-bold p-4'>{board.name}</h1>
          <p className='p-4'>{board.description}</p>
        </div>
         <div className='flex flex-row items-center justify-between'>
        <ToggleGroup type="single" className='bg-gray-100 dark:bg-gray-800 rounded-lg' >
            <ToggleGroupItem className='hover:bg-white' value="list"><ListIcon /></ToggleGroupItem>
            <ToggleGroupItem className='hover:bg-white' value="kanban"><Kanban /></ToggleGroupItem>
            <ToggleGroupItem className='hover:bg-white' value="sheet"><Sheet /></ToggleGroupItem>
         </ToggleGroup>
      </div>
     </div>


       

      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-2'>
        {lists.map((list) => (
          <List key={list.id} name={list.name} description={list.description}  taskData={list.taskData} />
        ))}
      </div>
    </div>
  );
}
