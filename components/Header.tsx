import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between items-center py-3 px-48 text-white/70'>
      <div className='font-extrabold text-3xl'>
        <Link href={'/'}>TodoList</Link>
      </div>
      <ul className='flex gap-8 text-2xl'>
        <li className='font-bold hover:bg-blue-100/20  p-2 cursor-pointer transition-all'>
          <Link href={'/tasks'}>Tasks</Link>
        </li>
        <li className='font-bold hover:bg-blue-100/20  p-2 cursor-pointer transition-all'>
          <Link href={'/about-us'}>About Us</Link>
        </li>
      </ul>
    </div>
  )
}
