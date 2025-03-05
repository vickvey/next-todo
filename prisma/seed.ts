import { Prisma } from '@prisma/client'

const taskData: Prisma.TaskCreateInput[] = [
  { desc: 'Brush Your Teeth' },
  { desc: 'Take Bath' },
  { desc: 'Make a healthy meal' },
]

async function main() {}
