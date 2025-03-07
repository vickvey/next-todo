import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa' // Importing FontAwesome icons

export default function Footer() {
  return (
    <div className='flex justify-between items-center gap-2 px-6 py-3 lg:px-48 mb-5'>
      <p>Copyright 2025</p>
      {/* Social Icons */}
      <div className='flex gap-4'>
        <Link href={'https://github.com/vickvey'} target='_blank'>
          <FaGithub className='text-xl hover:text-gray-600 transition-all cursor-pointer' />
        </Link>
        <Link href={'https://linkedin.com/in/vickvey'} target='_blank'>
          <FaLinkedin className='text-xl hover:text-gray-600 transition-all cursor-pointer' />
        </Link>
        <Link href={'https://x.com/vickvey'} target='_blank'>
          <FaTwitter className='text-xl hover:text-gray-600 transition-all cursor-pointer' />
        </Link>
      </div>
      <p>
        <Link href={'https://github.com/vickvey'}>Vivek Kumar</Link>
      </p>
    </div>
  )
}
