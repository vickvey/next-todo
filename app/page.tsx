import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center p-48 gap-2'>
      <h1 className='text-7xl font-extrabold text-gray-400'>TodoList</h1>
      <p className='text-2xl'>A simple yet efficient todolist app in NextJS</p>
      <Link href={'/dashboard'}>
        <p className='text-sm hover:underline p-2 hover:bg-white/20 transition-all'>
          Go to Dashboard
        </p>
      </Link>
    </div>
  )
}
