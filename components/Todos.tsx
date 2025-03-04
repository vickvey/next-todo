const todos = [
  {
    desc: 'Brush Your Teeth',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
  {
    desc: 'Study Web developement from frontend masters',
  },
]

export default function Todos() {
  return (
    <div className='flex flex-col items-center bg-gray-900 py-6 px-10 rounded-lg gap-3'>
      <h1 className='text-3xl'>Todos</h1>
      <ul className='flex flex-col gap-2'>
        {todos.map((todo, index) => {
          if (index <= 9)
            return (
              <li key={index} className=' border-2 p-2'>
                {index + 1} : {todo.desc}
              </li>
            )
          else return
        })}
      </ul>
    </div>
  )
}
