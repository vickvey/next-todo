'use client'

import { updateTaskStatus } from '@/lib/actions'
import { TaskStatus } from '@prisma/client'
import { ChangeEvent, useState } from 'react'

export default function Todo({
  id,
  desc,
  status,
}: {
  id: string
  desc: string
  status: string
}) {
  const [taskStatus, setTaskStatus] = useState<string>(status)
  function getTaskStatusColor(status: TaskStatus) {
    switch (status) {
      case TaskStatus.PENDING:
        return 'bg-gray-700'
      case TaskStatus.IN_PROGRESS:
        return 'bg-blue-900'
      case TaskStatus.DONE:
        return 'bg-green-700'
      default:
        return 'bg-red-500'
    }
  }

  async function handleTaskStatusUpdate(e: ChangeEvent<HTMLSelectElement>) {
    try {
      setTaskStatus(e.target.value)
      await updateTaskStatus(id, e.target.value as TaskStatus)
    } catch (error) {
      console.error(`Error updating task Status!`)
    }
  }

  return (
    <li className='border-2 p-3 flex gap-6 justify-between items-center'>
      <p className='text-xl'>{desc}</p>
      <select
        value={taskStatus}
        onChange={handleTaskStatusUpdate}
        className={`border-2 p-1.5 flex gap-2 ${getTaskStatusColor(
          taskStatus as TaskStatus,
        )}`}
      >
        <option
          value={TaskStatus.PENDING}
          className={`${getTaskStatusColor(TaskStatus.PENDING)}`}
        >
          {TaskStatus.PENDING}
        </option>
        <option
          value={TaskStatus.IN_PROGRESS}
          className={`${getTaskStatusColor(TaskStatus.IN_PROGRESS)}`}
        >
          {TaskStatus.IN_PROGRESS}
        </option>
        <option
          value={TaskStatus.DONE}
          className={`${getTaskStatusColor(TaskStatus.DONE)}`}
        >
          {TaskStatus.DONE}
        </option>
      </select>
    </li>
  )
}
