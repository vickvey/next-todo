import CardLayout from '@/components/CardLayout'
import CreateTodoForm from '@/components/CreateTodoForm'
import Todos from '@/components/Todos'

export default function DashboardPage() {
  return (
    <div className='h-full flex flex-col items-center py-4 lg:max-w-screen gap-6'>
      <h1 className='text-4xl font-medium'>Dashboard Page</h1>
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        <div className='flex flex-col gap-6'>
          <CardLayout
            title='Create Todo Form'
            children={<CreateTodoForm />}
          />
        </div>
        <Todos />
      </div>
    </div>
  )
}
