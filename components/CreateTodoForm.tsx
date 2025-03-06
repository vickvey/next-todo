import { createTask } from '@/lib/actions'

export default function CreateTodoForm() {
  return (
    <form action={createTask} className='flex gap-6'>
      <input
        type='text'
        name='task-desc'
        className='border-2 py-2 px-3 rounded-lg'
        placeholder='Ex. Brush your teeth'
      />
      <button
        type='submit'
        className='p-2 bg-gray-700 hover:bg-gray-600 transition-all cursor-pointer rounded-xl'
      >
        Create Todo
      </button>
    </form>
  )
}
