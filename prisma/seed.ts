import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const taskData: Prisma.TaskCreateInput[] = [
  { desc: 'Brush Your Teeth' },
  { desc: 'Take Bath' },
  { desc: 'Make a healthy meal' },
]

async function main() {
  console.log(`Database seeding started ...`)
  for (const t of taskData) {
    const task = await prisma.task.create({
      data: t,
    })
    console.log(`Task with ID: ${task.id} created successfully!`)
  }
  console.log(`Database seeding finished!`)
  return
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(err => {
    console.error('Error seeding the database: ', err)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
