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
   <NavigationMenu>
  <NavigationMenuList>
   

    <NavigationMenuItem>    
        { loggedIn ? (
          <NavigationMenuLink href="/dashboard">Dashboard</NavigationMenuLink>
        ) : (
          <NavigationMenuLink href="/login">Login</NavigationMenuLink>
        )}
    </NavigationMenuItem>
  </NavigationMenuList>
<h2 > 
    { loggedIn && loggedIn.data.user ? `Welcome back, ${loggedIn.data.user}` : "" }
</h2>

</NavigationMenu>
  )
}

export default Navbar