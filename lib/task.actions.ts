'use server'

import { TaskStatus } from '@prisma/client'
import prisma from './prisma'

export async function getAllTasks() {
  const todos = await prisma.task.findMany()
  return todos
}

export async function createTask(formDataObj: FormData) {
  const taskDesc = formDataObj.get('task-desc')
  if (!taskDesc) throw new Error('form data is null!')

  // Add Task Validation

  // Proceed with creating the task using Prisma if validation passes
  const task = await prisma.task.create({
    data: {
      desc: taskDesc as string, // Cast to string as Zod ensures it's a valid string
    },
  })
  console.log(`Task with Id: ${task.id} created successfully!`)
  return
}

export async function updateTaskDesc(id: string, newDesc: string) {
  const task = await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      desc: newDesc,
    },
  })
  console.log(
    `Task Description of Id: ${task.id} updated to ${task.desc} successfully!`,
  )
}

export async function isValidTaskId(id: string): Promise<boolean> {
  try {
    const task = await prisma.task.findUniqueOrThrow({
      where: {
        id: id,
      },
    })
    console.log(`Task with Id: ${task.id} found!`)
    return true
  } catch (error) {
    console.log(`Task with Id: ${id} not found!`)
    return false
  }
}

export async function updateTaskStatus(id: string, newStatus: TaskStatus) {
  try {
    await isValidTaskId(id)
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        status: newStatus,
      },
    })
    console.log(
      `Task Status of Id: ${task.id} updated to ${task.status} successfully!`,
    )
  } catch (error) {
    console.error(`Unable to updated Task Status of Id: ${id}`)
  }
  return
}
