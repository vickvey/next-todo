export default function UpdateTodoForm() {
  return (
    <div className='flex flex-col items-center gap-4 bg-gradient-to-r from-gray-900 to-slate-900/50 py-6 px-10 rounded-lg max-h-80'>
      <h1 className='text-3xl'>Update Todo Form</h1>
      <form action='#' className='flex flex-col gap-4'>
        <label
          htmlFor='desc'
          className='flex justify-between items-center gap-4'
        >
          <p>Enter Task Id: </p>
          <input
            type='number'
            className='border-2 py-2 px-3 rounded-lg'
            name='id'
            placeholder='Ex. 1'
          />
        </label>
        <label
          htmlFor='new-desc'
          className='flex justify-between items-center gap-4'
        >
          <p>Enter New Description: </p>
          <input
            type='text'
            className='border-2 py-2 px-3 rounded-lg'
            name='new-desc'
            placeholder='Ex. Brush your teeth'
          />
        </label>

        <button
          type='submit'
          className='p-2 bg-gray-700 hover:bg-gray-600 transition-all cursor-pointer rounded-xl'
        >
          Update Todo
        </button>
      </form>
    </div>
  )
}
