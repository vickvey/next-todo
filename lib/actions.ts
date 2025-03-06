'use server'

import prisma from './prisma'

export async function createTask(formDataObj: FormData) {
  const taskDesc = formDataObj.get('task-desc')
  if (!taskDesc) throw new Error('form data is null!')

  // Proceed with creating the task using Prisma if validation passes
  const task = await prisma.task.create({
    data: {
      desc: taskDesc as string, // Cast to string as Zod ensures it's a valid string
    },
  })
  console.log(`Task with Id: ${task.id} created successfully!`)
  return
}

/// TODO
// export async function updateTaskDesc(id: string, newTaskDesc: string)
