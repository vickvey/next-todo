import CreateTodoForm from '@/components/CreateTodoForm'
import Todos from '@/components/Todos'
import UpdateTodoForm from '@/components/UpdateTodoForm'

export default function DashboardPage() {
  return (
    <div className='h-full flex flex-col items-center py-4 lg:max-w-screen gap-6'>
      <h1 className='text-4xl font-medium'>Dashboard Page</h1>
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center gap-4 bg-gradient-to-r from-gray-900 to-slate-900/50 py-6 px-10 rounded-lg max-h-36 shadow-2xl'>
            <h1 className='text-3xl'>Create Todo Form</h1>
            <CreateTodoForm />
          </div>
          <div className='flex flex-col items-center gap-4 bg-gradient-to-r from-gray-900 to-slate-900/50 py-6 px-10 rounded-lg max-h-80'>
            <h1 className='text-3xl'>Update Todo Form</h1>
            <UpdateTodoForm />
          </div>
        </div>
        <Todos />
      </div>
    </div>
  )
}
