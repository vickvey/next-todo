import { Prisma, PrismaClient } from '@prisma/client'

const userData: Prisma.UserCreateInput[] = [
  {
    username: 'alexbiswas',
    password: 'alex123',
    tasks: {
      create: [
        { desc: 'Brush your teeth | Alex' },
        { desc: 'Take Bath | Alex' },
        { desc: 'Make a healthy meal | Alex' },
        { desc: 'Go to school | Alex' },
      ],
    },
  },
  {
    username: 'johnsmith',
    password: 'john123',
    tasks: {
      create: [
        { desc: 'Morning workout | John' },
        { desc: 'Read a book | John' },
        { desc: 'Prepare lunch | John' },
        { desc: 'Go for a walk | John' },
      ],
    },
  },
  {
    username: 'emilyjohnson',
    password: 'emily123',
    tasks: {
      create: [
        { desc: 'Meditate | Emily' },
        { desc: 'Write in journal | Emily' },
        { desc: 'Do yoga | Emily' },
        { desc: 'Make dinner | Emily' },
      ],
    },
  },
  {
    username: 'michaelsmith',
    password: 'michael123',
    tasks: {
      create: [
        { desc: 'Work on project | Michael' },
        { desc: 'Call family | Michael' },
        { desc: 'Go to the gym | Michael' },
        { desc: 'Watch a movie | Michael' },
      ],
    },
  },
  {
    username: 'sarahconnor',
    password: 'sarah123',
    tasks: {
      create: [
        { desc: 'Go grocery shopping | Sarah' },
        { desc: 'Clean the house | Sarah' },
        { desc: 'Meet friends | Sarah' },
        { desc: 'Prepare dinner | Sarah' },
      ],
    },
  },
  {
    username: 'davidwilson',
    password: 'david123',
    tasks: {
      create: [
        { desc: 'Read news | David' },
        { desc: 'Work on coding | David' },
        { desc: 'Take a break | David' },
        { desc: 'Sleep early | David' },
      ],
    },
  },
]

async function seed() {
  const prisma = new PrismaClient()
  try {
    console.log(`Seeding process started ...`)
    for (const u of userData) {
      const user = await prisma.user.create({ data: u })
      if (!user) throw new Error(`User ${u.username} creation failed!`)
      console.log(`User ${user.username} created successfully!`)
    }
    console.log(`Seeding completed successfully!`)
  } catch (error) {
    throw new Error(`Seeding failed!`)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
