import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link';
interface BoardCardProps {
    boardId: string;
    name:string;
    description?: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ boardId, name, description }) => {
  return (
    <Link href={`/projects/boards/${boardId}`}>
      <Card className='mt-4 p-4'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {description || ''}
        </CardDescription>
      </Card>
    </Link>
  )
}

export default BoardCard