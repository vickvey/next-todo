import prisma from '@/lib/prisma'
import Todo from './Todo'

export default async function Todos() {
  const todos = await prisma.task.findMany()

  return (
    <div className='flex flex-col items-center bg-gray-900 py-6 px-10 rounded-lg gap-3'>
      <h1 className='text-3xl'>Todos</h1>
      <ul className='flex flex-col gap-2'>
        {todos.map((todo, index) => {
          if (index <= 100)
            return (
              // <li key={index} className=' border-2 p-2'>
              //   {index + 1} : {todo.desc}
              // </li>
              <Todo
                key={todo.id}
                id={todo.id}
                desc={todo.desc}
                status={todo.status}
              />
            )
          else return
        })}
      </ul>
    </div>
  )
}
