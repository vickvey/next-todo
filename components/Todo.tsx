'use client'

import { useState } from 'react'

const taskStatus = ['PENDING', 'IN_PROGRESS', 'DONE']

const getStatusColorClass = (status: string) => {
  switch (status) {
    case taskStatus[0]:
      return 'bg-gray-600'
    case taskStatus[1]:
      return 'bg-blue-800'
    case taskStatus[2]:
      return 'bg-green-800'
    default:
      return 'bg-red-600'
  }
}

// Update status to the backend
const updateTaskStatus = async (id: string, newStatus: string) => {
  try {
    const response = await fetch(`/api/tasks/${id}/status/${newStatus}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to update task status')
    }

    return response.json() // Return the updated task
  } catch (error) {
    console.error('Error updating task status:', error)
    alert('Failed to update task status')
  }
}

export default function Todo({
  id,
  desc,
  status,
}: {
  id: string
  desc: string
  status: string
}) {
  const [taskStatusState, setTaskStatusState] = useState<string>(status)

  // Handle status change
  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newStatus = e.target.value
    setTaskStatusState(newStatus) // Update local state

    // Update the status on the backend
    await updateTaskStatus(id, newStatus)
  }

  return (
    <li className='border-2 p-3 flex gap-6 justify-between items-center'>
      <p className='text-xl'>{desc}</p>
      <select
        name='task-status'
        id='task-status'
        value={taskStatusState}
        onChange={handleStatusChange}
        className={`border-2 p-1.5 rounded-lg ${getStatusColorClass(
          taskStatusState,
        )}`}
      >
        {taskStatus.map((ts, idx) => (
          <option value={ts} key={idx}>
            {ts}
          </option>
        ))}
      </select>
    </li>
  )
}
