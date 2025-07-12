import {login, signup} from './actions'

import React from 'react'
import { LoginForm } from '@/components/loginForm'
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-25">
      <LoginForm />
    </div>
  )
}

export default page