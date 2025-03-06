import prisma from '@/lib/prisma'
import { TaskStatus } from '@prisma/client'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  console.log('Requested ID:', id) // Log the id to debug

  // Ensure the id is a valid UUID
  if (!isValidUUID(id)) {
    return new Response(JSON.stringify({ message: 'Invalid UUID format' }), {
      status: 400,
    })
  }

  // Fetch the task using findUnique to ensure we get the correct task by UUID
  const task = await prisma.task.findUnique({
    where: {
      id: id, // Using the route parameter `id` to query the task
    },
  })

  if (!task) {
    return new Response(JSON.stringify({ message: 'Task not found' }), {
      status: 404,
    })
  }

  return new Response(JSON.stringify({ task }), { status: 200 })
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string; newStatus: string } },
) {
  const { id, newStatus } = params

  // Ensure the request is coming from the right place and validate inputs
  if (!id || !newStatus) {
    return new Response('Missing parameters', { status: 400 })
  }

  // // Check if the newStatus is a valid TaskStatus
  // if (
  //   ![TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE].includes(
  //     newStatus,
  //   )
  // ) {
  //   return new Response('Invalid status', { status: 400 })
  // }

  try {
    const updatedTask = await updateTaskStatusInDatabase(id, newStatus)

    return new Response(JSON.stringify(updatedTask), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error updating task status:', error)
    return new Response('Failed to update task status', { status: 500 })
  }
}

// Function to simulate updating the task status in a database
const updateTaskStatusInDatabase = async (
  taskId: string,
  newStatus: string,
) => {
  try {
    // Update the task status in the database
    const updatedTask = await prisma.task.update({
      where: {
        id: taskId, // Find task by its ID
      },
      data: {
        status:
          newStatus === 'PENDING'
            ? TaskStatus.PENDING
            : newStatus === 'IN_PROGRESS'
            ? TaskStatus.IN_PROGRESS
            : TaskStatus.DONE, // Set the new status
      },
    })

    // Return the updated task details
    return {
      id: updatedTask.id,
      status: updatedTask.status,
      message: `Task ${updatedTask.id} updated to status ${updatedTask.status}`,
    }
  } catch (error) {
    console.error('Error updating task status:', error)
    throw new Error('Failed to update task status')
  }
}

// Helper function to validate if the ID is a valid UUID
function isValidUUID(id: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  return regex.test(id)
}
