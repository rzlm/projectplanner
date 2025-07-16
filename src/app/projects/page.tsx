import React from 'react'

import { createClient } from '../../../utils/supabase/server'
import NewProject from '@/components/newProject'
export default async function page() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (

    <div>
        <h1 className='text-2xl font-bold p-4'>Your Projects</h1>

        <div>
            {/*Map all of the projects here */}
        </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <NewProject />
          </div>

    </div>
  )
}

