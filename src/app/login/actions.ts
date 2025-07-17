'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'
import { PrismaClient } from '@prisma/client'
import { ca } from 'date-fns/locale'

const prisma = new PrismaClient()

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  if (!data.email || !data.password) {
    console.error('Email and password are required')
    redirect('/error')
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login error:', error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  console.log("Sign up data:", formData)

  
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  if (!data.email || !data.password) {
    console.error('Email and password are required')
    redirect('/error')
  }


  const { error } = await supabase.auth.signUp(data)


  if (error) {
    console.error('Signup error:', error)
    redirect('/error')
  }

  try {
    //get user id from supabase
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError || !userData?.user) {
      console.error('User not authenticated:', userError)
      redirect('/error')
    }

    await prisma.user.create({
      data: {
        email: data.email,
        authId: userData.user.id
      },
    })

    console.log('User created in Prisma:', data.email)
  } catch (error) {
    console.error('Database error:', error)
    redirect('/error')
  }

  



  revalidatePath('/', 'layout')
  redirect('/')



}