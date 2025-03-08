'use server'

import { redirect } from 'next/navigation'
import prisma from '../prisma'
import { userSchema } from '../validations/user.validations'
import { hash } from 'bcrypt'
import { Prisma } from '@prisma/client'

export async function registerUser(formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')
  const passwordAgain = formData.get('password-again')

  if (
    !username ||
    !password ||
    !passwordAgain ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof passwordAgain
  ) {
    return {
      errors: [
        { message: 'Username, password and confirm password are required' },
      ],
    }
  }

  const validation = userSchema.safeParse({
    username,
    password,
  })

  if (!validation.success) {
    return {
      errors: validation.error.issues,
    }
  }

  try {
    const { username, password } = validation.data
    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    })

    console.log(`User ${username} registered successfully!`)
    redirect('/dashboard')
  } catch (error) {
    // Type the error as PrismaClientKnownRequestError
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        // Unique constraint violation
        return {
          errors: [{ message: 'Username already exists' }],
        }
      }
    }
    console.error('Registration error:', error)
    return {
      errors: [{ message: 'Failed to register user' }],
    }
  }
}
