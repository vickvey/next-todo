export default function AddTodoForm() {
  return (
    <div className='flex flex-col items-center gap-4 bg-gradient-to-r from-gray-900 to-slate-900/50 py-6 px-10 rounded-lg max-h-36 shadow-2xl'>
      <h1 className='text-3xl'>Create Todo Form</h1>
      <form action='#' className='flex gap-6'>
        <input
          type='text'
          className='border-2 py-2 px-3 rounded-lg'
          placeholder='Ex. Brush your teeth'
        />
        <button
          type='submit'
          className='p-2 bg-gray-700 hover:bg-gray-600 transition-all cursor-pointer rounded-xl'
        >
          Create Todo
        </button>
      </form>
    </div>
  )
}
