import CreateTodoForm from '@/components/CreateTodoForm'
import Todos from '@/components/Todos'
import UpdateTodoForm from '@/components/UpdateTodoForm'

export default function DashboardPage() {
  return (
    <div className='h-full flex flex-col items-center py-4 max-w-screen gap-6'>
      <h1 className='text-4xl font-medium'>Dashboard Page</h1>
      <div className='flex gap-8'>
        <Todos />
        <div className='flex flex-col gap-6'>
          <CreateTodoForm />
          <UpdateTodoForm />
        </div>
      </div>
    </div>
  )
}
