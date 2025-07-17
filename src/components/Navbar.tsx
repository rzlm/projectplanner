import React from 'react'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { createClient } from '@supabase/supabase-js'
import { type User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const Navbar = async () => {
    //check if the user is logged in
    const loggedIn = await supabase.auth.getUser()
  
  return (
   <NavigationMenu className='py-4'>
  <NavigationMenuList>
    <h1 className='text-xl font-bold px-4 text-pink-600'>
      Project Planner
      </h1>
   

   
    
        { loggedIn ? (
             <div className='flex flex-row gap-4'>
               <NavigationMenuItem className='border border-gray-300 rounded-md'>    
                <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className='border border-gray-300 rounded-md'>
                <NavigationMenuLink href="/profile">Profile</NavigationMenuLink>
              </NavigationMenuItem>
             </div>
        ) : (
              <NavigationMenuItem> 
              <NavigationMenuLink href="/login">Login</NavigationMenuLink>
              </NavigationMenuItem>
        )}

  </NavigationMenuList>
<h2 > 
    { loggedIn && loggedIn.data.user ? `Welcome back, ${loggedIn.data.user}` : "" }
</h2>

</NavigationMenu>
  )
}

export default Navbar