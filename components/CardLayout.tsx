export default function CardLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className='flex flex-col items-center gap-4 bg-gradient-to-r from-gray-900 to-slate-900/50 py-6 px-10 rounded-lg'>
      <h1 className='text-3xl'>{title}</h1>
      {children}
    </section>
  )
}
