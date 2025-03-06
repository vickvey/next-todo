import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-6 lg:flex-row lg:justify-between lg:py-3 lg:px-48 text-white/70'>
      {/* Hero Logo */}
      <div className='font-extrabold text-2xl lg:text-3xl'>
        <Link href={'/'}>TodoList</Link>
      </div>

      {/* Nav Bar Links */}
      <ul className='flex gap-8 lg:text-2xl'>
        <li className='font-bold hover:bg-blue-100/20 lg:p-2 cursor-pointer transition-all'>
          <Link href="https://vickvey.github.io/" target='_blank'>My Portfolio</Link>
        </li>
        <li className='font-bold hover:bg-blue-100/20 lg:p-2 cursor-pointer transition-all'>
          <Link href={'/about-us'}>About Us</Link>
        </li>
      </ul>
    </div>
  );
}
