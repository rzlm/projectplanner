import React from 'react'

import { createClient } from '../../../utils/supabase/server'
import NewProject from '@/components/newProject'
import { redirect } from 'next/navigation'
import Project from '@/components/project'
import {fetchProjectsbyUserId} from '@/lib/fetching'
import {getUserId} from '@/lib/fetching'
import Link from 'next/link'

export default async function page() {


  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  const user = await getUserId(data.user.id)
    if (!user) {
      redirect('/error')
    }

  const projects = await fetchProjectsbyUserId(user.id)



  return (

    <div>
        <h1 className='text-2xl font-bold p-4'>Your Projects</h1>

       {projects.length > 0 ? (
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-20'>
           {projects.map((project) => (
             <Project
               key={project.id} {...project} description={project.description ?? undefined}
             />
           ))}
         </div>
       ) : (
         <p>No projects found.</p>
       )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-20">
                <NewProject />
          </div>

    </div>
  )
}

