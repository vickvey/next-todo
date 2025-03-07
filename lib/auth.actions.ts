'use server'
import prisma from './prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

// Secret key for JWT (store this in .env in production)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Register a new user
export async function registerUser(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password) {
    throw new Error('Username and password are required')
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  if (existingUser) {
    throw new Error('Username already taken')
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create the user
  const user = await prisma.user.create({
    data: { username, password: hashedPassword },
  })
  console.log(`User ${username} registered successfully!`)
  return { message: 'User registered successfully' }
}

// Login a user and return a JWT token
export async function loginUser(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password)
    throw new Error('Username and password are required')

  // Find the user
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  })
  if (!user) throw new Error('Invalid credentials')

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) throw new Error('Invalid credentials')

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

  // Store token in cookies (httpOnly for security)
  ;(await cookies()).set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  console.log(`User ${username} logged in successfully!`)
  return { message: 'Login successfull', token }
}

// Verify the JWT token and return the user info
export async function getCurrentUser() {
  const token = (await cookies()).get('token')?.value

  if (!token) throw new Error('Not authenticated')

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    const user = await prisma.user.findUnique({
      where: {
        username: decoded.userId,
      },
      select: {
        id: true,
        username: true, // Exclude password
      },
    })

    if (!user) throw new Error('User not found!')
    return user
  } catch (error) {
    throw new Error('Invalid token')
  }
}

// Logout user by clearing the cookie
export async function logoutUser() {
  ;(await cookies()).delete('token')
  return { message: 'Logged out successfully' }
}
