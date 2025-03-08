import { z } from 'zod'

export const userSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be of atleast length 3')
    .max(50, 'Username cannot exceed 50 characters'),
  password: z.string().min(4, 'Password must be of atleast length 2'),
})
