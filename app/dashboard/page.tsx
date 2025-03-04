import CreateTodoForm from '@/components/CreateTodoForm'
import Todos from '@/components/Todos'
import UpdateTodoForm from '@/components/UpdateTodoForm'

export default function DashboardPage() {
  return (
    <div className='h-full flex flex-col items-center py-4 lg:max-w-screen gap-6'>
      <h1 className='text-4xl font-medium'>Dashboard Page</h1>
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        <div className='flex flex-col gap-6'>
          <CreateTodoForm />
          <UpdateTodoForm />
        </div>
        <Todos />
      </div>
    </div>
  )
}
