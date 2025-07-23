// app/projects/[project]/page.tsx
import {getProjectById} from '@/lib/fetching';
import BoardCard from '@/components/boardCard';
import { getBoardByProjectId } from '@/lib/fetching';
import { BoardDialog } from '@/components/createBoard';


// export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
//   return {
//     title: `Project: ${projectInfo.name}`,
//   };
// }



export default async function Page({ params }: { params: { id: string } }) {
        

  const { id } = params;

    const project = await getProjectById(id);
    console.log("Project ID:", id);
    console.log("Project data:", project);
    if (!project) {
      return (
        <div>
          <h1 className='text-2xl font-bold p-4'>Project Not Found</h1>
          <p className='p-4'>The project you are looking for does not exist.</p>
        </div>
      );
    }

  // const projectInfo = await getProjectById(id);
    const name = project.name || 'Project Not Found';
    const startDate =  new Date(project.createdAt).toLocaleDateString() 
    const boards = await getBoardByProjectId(id);

  console.log("Boards for project:", boards);


  return (
    <div className='p-4 mx-20'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p>{project.description}</p>
      <p className='text-sm text-gray-600 dark:text-gray-400'>Created on: {startDate}</p>

      <div>
       <div className='flex flex-row items-center mt-8 justify-between'>
         <h2 className='text-xl font-semibold '>Project Boards</h2>
         <BoardDialog projectId={id} />
       </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {boards.length > 0 ? (
            boards.map((board) => (
              <BoardCard key={board.id} {...board} projectId ={id} boardId={board.id} description={board.description ?? undefined} />
            ))
          ) : (
            <p>No boards found for this project.</p>
          )}
        </div>
      </div>
       </div>
        
   
  );
}
