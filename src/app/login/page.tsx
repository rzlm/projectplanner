import { login, signup } from './actions'
import { Input } from '@/components/ui/input'
export default function LoginPage() {
  return (
    <form className="flex flex-col items-center justify-center max-w-md  bg-gray-100 mt-25" method="post">
      <label htmlFor="email">Email:</label>
      <Input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <Input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}