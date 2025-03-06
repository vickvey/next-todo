import Todo from './Todo'
import { getAllTasks } from '@/lib/actions'

export default async function Todos() {
  const todos = await getAllTasks()

  return (
    <div className='flex flex-col items-center bg-gray-900 py-6 px-10 rounded-lg gap-3'>
      <h1 className='text-3xl'>Todos</h1>
      <ul className='flex flex-col gap-2'>
        {todos.map((todo, index) => {
          if (index <= 100)
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                desc={todo.desc}
                status={todo.status}
              />
            )
          else return <div className='text-4xl'>Too Much Tasks ... Ooof</div>
        })}
      </ul>
    </div>
  )
}
