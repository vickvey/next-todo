import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-start px-12 py-64 lg:items-center lg:p-48 gap-2'>
      <h1 className='text-7xl font-extrabold text-gray-400'>TodoList</h1>
      <p className='text-lg lg:text-2xl'>
        A simple yet efficient todolist app in NextJS
      </p>
      <Link href={'/dashboard'}>
        <p className='text-sm hover:underline p-2 text-white/80 hover:bg-white/20 transition-all'>
          Go to Dashboard
        </p>
      </Link>
    </div>
  )
}
