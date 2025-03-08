'use client'

import { registerUser } from '@/lib/actions/auth.actions'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function SignUpForm() {
  const [errors, setErrors] = useState<string[]>([])

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Reset previous errors
    setErrors([])

    // Create FormData from the given form
    const formData = new FormData(event.target as HTMLFormElement)

    // Call the registerUser function and hangle errors
    try {
      await registerUser(formData)
      redirect('/dashboard')
    } catch (error) {
      if (error instanceof Error) {
        setErrors([error.message])
      } else {
        setErrors(['An unexpected error occured. Please try again later.'])
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' id='username' />
      <input type='text' name='password' id='password' />
      <input type='text' name='password-again' id='password-again' />
      {errors.length > 0 && (
        <div className='error-messages'>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <button type='submit'>Sign Up</button>
    </form>
  )
}
