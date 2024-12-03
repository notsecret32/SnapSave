import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/store'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const SignInPage: FC = () => {
  const navigate = useNavigate()
  const { signIn } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await signIn({
      email,
      password
    })

    navigate('/storage', { replace: true })
  }

  return (
    <main>
      <div className="max-w-xs space-y-2 p-4">
        <h1>Sign In</h1>
        <Input
          type="email"
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
        <p>
          Go to{' '}
          <Link to="/sign-up" className="underline">
            Sign Up
          </Link>{' '}
          page
        </p>
      </div>
    </main>
  )
}
