import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'
import {Card, CardContent, CardTitle} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PersonStanding } from 'lucide-react'
import { Image } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='flex flex-col items-center justify-center '>
        <h1 className='text-2xl font-bold '>Profile Settings</h1>
<div className='flex flex-col md:flex-row items-center gap-8'>


        <Card className='w-full min-w-md mt-8'>
          <CardContent>
            <CardTitle className='text-lg font-semibold mb-4'>Personal Information</CardTitle>
            <div className='flex flex-row items-center gap-4 mb-6'>
              <div>
                <Image className='w-20 h-20 rounded-full mb-4' src={data.user.user_metadata.avatar_url || '/default-avatar.png'} alt='User Avatar' />

              </div>
              <div className='flex flex-col gap-4'>
                <Label className='text-sm font-medium'>Full Name</Label>
              <Input placeholder='Name' defaultValue={data.user.user_metadata.full_name || ''} />
                <Label className='text-sm font-medium'>Email</Label>
                <Input placeholder='Email' defaultValue={data.user.email} />
            </div>
           
            </div>
            <Button className='mt-4'>Update</Button>
          </CardContent>

        </Card>

        <Card className='w-full max-w-md mt-8'>
          <CardContent className='flex flex-col items-center'>
           <CardTitle className='text-lg font-semibold mb-4'>Your Stats</CardTitle>
           <div>
           <div className='flex flex-row gap-4 '>
               <h2>Projects Completed</h2>
              <p className='text-sm text-gray-600 mt-2'>5</p>
           </div>
           <div className='flex flex-row gap-4'>
              <h2>Tasks Completed</h2>
              <p className='text-sm text-gray-600 mt-2'>10</p>
           </div>
           <div className='flex flex-row gap-4'>
            <h2>Member Since</h2>
            <p className='text-sm text-gray-600 '>January 2021</p>
           </div>
           </div>
          </CardContent>
        </Card>
        </div>
    </div>
  )
}