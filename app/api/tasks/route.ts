import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    // Fetch tasks from Prisma database
    const tasks = await prisma.task.findMany()

    // Cache the response for 1 hour (3600 seconds)
    const headers = new Headers()
    headers.set(
      'Cache-Control',
      'public, max-age=3600, stale-while-revalidate=86400',
    )

    // Return the tasks as a JSON response with cache headers
    return new Response(JSON.stringify({ tasks }), {
      headers,
    })
  } catch (error) {
    // Handle error if something goes wrong
    return new Response(JSON.stringify({ error: 'Failed to fetch tasks' }), {
      status: 500,
    })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.formData()
    const desc = data.get('desc') as string

    // Ensure the description is provided
    if (!desc || desc.trim() === '') {
      return new Response(
        JSON.stringify({ message: 'Description is required' }),
        { status: 400 },
      )
    }

    const task = await prisma.task.create({
      data: {
        desc: desc,
      },
    })

    console.log(`Task with Id: ${task.id} created successfully!`)

    // Return a JSON response with a success message and status 201 (Created)
    return new Response(
      JSON.stringify({
        message: 'Data Created Successfully',
        task: { ...task },
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json', // Ensure the correct content type is set
        },
      },
    )
  } catch (error) {
    const err = error as Error
    console.error('Error creating task:', error)
    return new Response(
      JSON.stringify({
        message: 'Failed to create task',
        error: err.message,
      }),
      { status: 500 },
    )
  }
}
