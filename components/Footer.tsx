import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 lg:py-3 lg:px-48'>
      <div>Copyright 2025</div>
      <div>
        Developed By:{' '}
        <Link href={'https://github.com/vickvey'}>Vivek Kumar</Link>
      </div>
    </div>
  )
}
