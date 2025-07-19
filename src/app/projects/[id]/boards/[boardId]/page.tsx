import React from 'react'
import { getBoardById } from '@/lib/fetching';

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

  return (
    <div>
      <h1 className='text-2xl font-bold p-4'>{board.name}</h1>
      <p className='p-4'>{board.description}</p>
    </div>
  );
}
