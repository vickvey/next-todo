import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex justify-between py-3 px-48'>
      <div>Copyright 2025</div>
      <div>
        Developed By:{' '}
        <Link href={'https://github.com/vickvey'}>Vivek Kumar</Link>
      </div>
    </div>
  )
}
