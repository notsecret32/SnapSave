import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/store'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const SignUpPage: FC = () => {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await signUp({
      email,
      password
    })

    navigate('/dashboard', { replace: true })
  }

  return (
    <main>
      <div className="max-w-xs space-y-2 p-4">
        <h1>Sign Up</h1>
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
          Sign Up
        </Button>
        <p>
          Go to{' '}
          <Link to="/sign-in" className="underline">
            Sign In
          </Link>{' '}
          page
        </p>
      </div>
    </main>
  )
}
